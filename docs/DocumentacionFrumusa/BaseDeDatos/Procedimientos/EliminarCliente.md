---
sidebar_position: 1
sidebar_label: Documentación Eliminar_Cliente
---

# Procedimiento Eliminar_Cliente

Este procedimiento PL/SQL permite eliminar un cliente de la tabla `TAECCLIENTES` a partir de su número de identificación, retornando un mensaje de resultado a través de un parámetro de salida.

## Parámetros

| Parámetro                 | Tipo       | Dirección | Descripción                                                                |
| ------------------------- | ---------- | --------- | -------------------------------------------------------------------------- |
| p_numero_identificacion   | VARCHAR2   | IN        | Número de identificación del cliente a eliminar (no sensible a mayúsculas) |
| p_mensaje                 | VARCHAR2   | OUT       | Mensaje de resultado del procedimiento (éxito o error)                     |

## Código fuente

```sql
CREATE OR REPLACE PROCEDURE eliminar_cliente(
    p_numero_identificacion IN VARCHAR2,
    p_mensaje OUT VARCHAR2  
) AS
    v_count NUMBER;
BEGIN
    p_mensaje := 'Cliente no encontrado.';  

    SELECT COUNT(*) INTO v_count  
    FROM TAECCLIENTES  
    WHERE UPPER(NUMEROIDENTIFICACION) = UPPER(p_numero_identificacion);

    IF v_count > 0 THEN
        DELETE FROM TAECCLIENTES  
        WHERE UPPER(NUMEROIDENTIFICACION) = UPPER(p_numero_identificacion);
        p_mensaje := 'Cliente eliminado exitosamente.';
    END IF;

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        p_mensaje := 'Error en el proceso: ' || SQLERRM;
        RAISE_APPLICATION_ERROR(-20007, 'Error en el proceso de consulta del test de cliente' || SQLERRM);
END eliminar_cliente;
```

## Lógica del procedimiento

1. Se inicializa el mensaje con `'Cliente no encontrado.'`.
2. Se consulta si el cliente existe (comparación insensible a mayúsculas/minúsculas).
3. Si existe, se elimina el registro correspondiente y se actualiza el mensaje de salida.
4. Si ocurre una excepción, se revierte la transacción con `ROLLBACK`, se actualiza el mensaje con el error y se lanza un error personalizado.

## Dependencias

- Tabla: `TAECCLIENTES`
- Llave: `NUMEROIDENTIFICACION`

## Ejemplo de uso

```plsql
DECLARE
  v_mensaje VARCHAR2(200);
BEGIN
  eliminar_cliente('ABC123456', v_mensaje);
  DBMS_OUTPUT.PUT_LINE(v_mensaje);
END;
``` 