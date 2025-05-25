---
sidebar_position: 1
sidebar_label: Documentación Validar_Cliente
---

# Función Validar_Cliente

Esta función PL/SQL permite validar las credenciales de un cliente utilizando hashing SHA-256 y devolver un mensaje de resultado textual. Es útil para flujos de autenticación personalizada.

## Parámetros

| Parámetro                 | Tipo       | Dirección | Descripción                                    |
| ------------------------- | ---------- | --------- | ---------------------------------------------- |
| p_numero_identificacion   | VARCHAR2   | IN        | Número de identificación único del cliente     |
| p_contrasena              | VARCHAR2   | IN        | Contraseña en texto plano que se desea validar |

## Código fuente

```sql
CREATE OR REPLACE FUNCTION FN_VALIDAR_CLIENTE (
    p_numero_identificacion IN VARCHAR2,
    p_contrasena IN VARCHAR2
) RETURN VARCHAR2 IS
    v_contrasena_hash VARCHAR2(100);
BEGIN
    -- Recuperar el hash de la contraseña almacenada para el cliente
    SELECT "CONTRASENA"
    INTO v_contrasena_hash
    FROM "TAECCLIENTES"
    WHERE "NUMEROIDENTIFICACION" = p_numero_identificacion;

    -- Comparar el hash almacenado con el hash de la contraseña proporcionada
    IF v_contrasena_hash = RAWTOHEX(DBMS_CRYPTO.HASH(
        UTL_I18N.STRING_TO_RAW(p_contrasena, 'AL32UTF8'),
        DBMS_CRYPTO.HASH_SH256))
    THEN
        apex_util.set_session_state('APP_USER_ID', p_numero_identificacion);
        RETURN 'Inicio de sesión exitoso.';
    ELSE
        RETURN 'Error: La contraseña no coincide.';
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN 'Error: Cliente no encontrado o número de identificación incorrecto.';
    WHEN OTHERS THEN
        RETURN 'Error: Ocurrió un problema inesperado.';
END;
```

## Valor Retornado

- `VARCHAR2`: Devuelve un mensaje textual indicando el resultado del proceso de autenticación.

## Lógica de la función

1. Busca el hash de la contraseña del cliente usando su número de identificación.
2. Compara dicho hash con el hash calculado a partir de la contraseña ingresada.
3. Si coincide, establece una variable de sesión (`APP_USER_ID`) y retorna un mensaje de éxito.
4. Si no coincide, devuelve un mensaje de error.
5. Captura errores como usuario no encontrado y otros errores generales.

## Dependencias

- Tabla: `TAECCLIENTES`
- Paquetes: `DBMS_CRYPTO`, `UTL_I18N`, `APEX_UTIL`

## Ejemplo de uso

```plsql
DECLARE
  v_resultado VARCHAR2(100);
BEGIN
  v_resultado := FN_VALIDAR_CLIENTE('1020304050', 'claveSegura');
  DBMS_OUTPUT.PUT_LINE(v_resultado);
END;
```