---
sidebar_position: 1
sidebar_label: Documentación Login_Manual
---

# Función Login_Manual

Esta función PL/SQL permite validar manualmente el inicio de sesión de un usuario mediante su número de identificación (cédula) y contraseña. Utiliza hashing con SHA-256 para comparar contraseñas encriptadas y gestiona variables de sesión en Oracle APEX.

## Parámetros

| Parámetro      | Tipo       | Dirección | Descripción                          |
| -------------- | ---------- | --------- | ------------------------------------ |
| p_cedula       | VARCHAR2   | IN        | Número de identificación del usuario |
| p_contrasena   | VARCHAR2   | IN        | Contraseña en texto plano a validar  |

## Código fuente

```sql
CREATE OR REPLACE FUNCTION FN_LOGIN_MANUAL (
    p_cedula IN VARCHAR2,
    p_contrasena IN VARCHAR2
) RETURN BOOLEAN
IS
    v_nombre_completo TAECCLIENTES.NOMBRECOMPLETO%TYPE;
    v_hash_almacenado TAECCLIENTES.CONTRASENA%TYPE;
BEGIN
    -- 1. Buscar el hash de la contraseña en la tabla
    BEGIN
        SELECT CONTRASENA, NOMBRECOMPLETO
        INTO v_hash_almacenado, v_nombre_completo
        FROM TAECCLIENTES
        WHERE NUMEROIDENTIFICACION = p_cedula;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN FALSE; -- Usuario no encontrado
    END;

    -- 2. Comparar contraseñas encriptadas
    IF v_hash_almacenado = RAWTOHEX(
        DBMS_CRYPTO.HASH(
            UTL_I18N.STRING_TO_RAW(p_contrasena, 'AL32UTF8'),
            DBMS_CRYPTO.HASH_SH256
        )
    ) THEN
        -- 3. Si es válida, guardar la cédula en variable de sesión
        APEX_UTIL.SET_SESSION_STATE('APP_USER_ID', p_cedula);
        APEX_UTIL.SET_SESSION_STATE('APP_USER_NOMBRE', v_nombre_completo);
        RETURN TRUE;
    ELSE
        RETURN FALSE; -- Contraseña incorrecta
    END IF;

EXCEPTION
    WHEN OTHERS THEN
        APEX_DEBUG.ERROR('Error en FN_LOGIN_MANUAL: ' || SQLERRM);
        RETURN FALSE;
END;
```

## Valor Retornado

- `BOOLEAN`: Devuelve `TRUE` si la autenticación es exitosa, de lo contrario `FALSE`.

## Lógica de la función

1. **Consulta de usuario:** Busca el hash de la contraseña y el nombre completo en la tabla `TAECCLIENTES`.
2. **Comparación de hash:** Compara el hash almacenado con el hash calculado desde la entrada del usuario usando SHA-256.
3. **Gestión de sesión:** Si es correcta, guarda variables de sesión usando `APEX_UTIL`.
4. **Manejo de errores:** Retorna `FALSE` si ocurre algún error.

## Dependencias

- Tabla: `TAECCLIENTES`
- Paquetes: `DBMS_CRYPTO`, `UTL_I18N`, `APEX_UTIL`, `APEX_DEBUG`

## Ejemplo de uso

```plsql
DECLARE
  v_resultado BOOLEAN;
BEGIN
  v_resultado := FN_LOGIN_MANUAL('1234567890', 'mi_contraseña_segura');
  IF v_resultado THEN
    DBMS_OUTPUT.PUT_LINE('Login exitoso');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Credenciales inválidas');
  END IF;
END;
```