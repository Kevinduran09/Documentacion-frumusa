---
sidebar_position: 1
sidebar_label: Documentación Test_Cliente
---

# Función Test_Cliente

Esta función PL/SQL permite verificar la existencia de un cliente en la base de datos `TAECCLIENTES` y eliminarlo si existe. Retorna una respuesta estructurada en formato JSON indicando el resultado del proceso.

## Parámetros

| Parámetro                 | Tipo       | Dirección | Descripción                                                  |
| ------------------------- | ---------- | --------- | ------------------------------------------------------------ |
| p_numero_identificacion   | VARCHAR2   | IN        | Número de identificación único del cliente a buscar/eliminar |

## Código fuente

```sql
CREATE OR REPLACE FUNCTION test_cliente(
    p_numero_identificacion IN VARCHAR2
)  
RETURN VARCHAR2  
IS
    v_count NUMBER;
BEGIN
    -- Verificar si el cliente existe
    SELECT COUNT(*) INTO v_count  
    FROM TAECCLIENTES  
    WHERE UPPER(NUMEROIDENTIFICACION) = UPPER(p_numero_identificacion);

    -- Si existe, eliminarlo
    IF v_count > 0 THEN
        DELETE FROM TAECCLIENTES  
        WHERE UPPER(NUMEROIDENTIFICACION) = UPPER(p_numero_identificacion);
        COMMIT;  -- Realizar commit para persistir los cambios
        RETURN '{"mensaje": "Cliente eliminado exitosamente"}';
    ELSE
        RETURN '{"mensaje": "Cliente no encontrado"}';
    END IF;

EXCEPTION
    WHEN OTHERS THEN
        -- Capturar errores generales y devolver un mensaje en formato JSON
        RETURN '{"mensaje": "Error al procesar la solicitud: ' || SQLERRM || '"}';
END test_cliente;
```

## Valor Retornado

- `VARCHAR2`: Cadena en formato JSON con el mensaje del resultado del proceso.

## Lógica de la función

1. Verifica si el cliente existe usando una comparación insensible a mayúsculas.
2. Si existe, lo elimina de la tabla y realiza un `COMMIT`.
3. Retorna un mensaje en formato JSON con el resultado (éxito o cliente no encontrado).
4. En caso de error, captura la excepción y devuelve el mensaje de error en JSON.

## Dependencias

- Tabla: `TAECCLIENTES`

## Ejemplo de uso

```plsql
DECLARE
  v_respuesta VARCHAR2(200);
BEGIN
  v_respuesta := test_cliente('10203040');
  DBMS_OUTPUT.PUT_LINE(v_respuesta);
END;
```