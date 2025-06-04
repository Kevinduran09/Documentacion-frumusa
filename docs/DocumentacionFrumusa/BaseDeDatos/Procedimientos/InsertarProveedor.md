---
sidebar_position: 1
sidebar_label: Documentación Insertar_Proveedor
---

# Procedimiento Insertar_Proveedor

Este procedimiento PL/SQL permite insertar un nuevo proveedor en la tabla `TAECPROVEEDORES`, realizando previamente validaciones sobre los campos obligatorios y controlando errores comunes.

## Parámetros

| Parámetro              | Tipo       | Dirección | Descripción                            |
| ---------------------- | ---------- | --------- | -------------------------------------- |
| p_nombre_proveedor     | VARCHAR2   | IN        | Nombre del proveedor                   |
| p_nombre_contacto      | VARCHAR2   | IN        | Nombre de la persona de contacto       |
| p_pais_origen          | VARCHAR2   | IN        | País de origen del proveedor           |
| p_numero_telefono      | VARCHAR2   | IN        | Número de teléfono del proveedor       |
| p_correo_electronico   | VARCHAR2   | IN        | Dirección de correo electrónico        |
| p_detalles_productos   | CLOB       | IN        | Detalles sobre los productos ofrecidos |

## Código fuente

```sql
CREATE OR REPLACE PROCEDURE insertar_proveedor (
    p_nombre_proveedor    IN VARCHAR2,
    p_nombre_contacto     IN VARCHAR2,
    p_pais_origen         IN VARCHAR2,
    p_numero_telefono     IN VARCHAR2,
    p_correo_electronico  IN VARCHAR2,
    p_detalles_productos  IN CLOB
) AS
BEGIN
     -- Validaciones de campos obligatorios
    IF p_nombre_proveedor IS NULL OR p_nombre_proveedor = '' THEN
        RAISE_APPLICATION_ERROR(-20001, 'El campo "Nombre del Proveedor" es obligatorio.');
    END IF;

    IF p_nombre_contacto IS NULL OR p_nombre_contacto = '' THEN
        RAISE_APPLICATION_ERROR(-20002, 'El campo "Nombre de Contacto" es obligatorio.');
    END IF;

    IF p_pais_origen IS NULL OR p_pais_origen = '' THEN
        RAISE_APPLICATION_ERROR(-20004, 'El campo "Número de Teléfono" es obligatorio.');
    END IF;

    IF p_correo_electronico IS NULL OR p_correo_electronico = '' THEN
        RAISE_APPLICATION_ERROR(-20005, 'El campo "Correo Electrónico" es obligatorio.');
    END IF;

    IF p_detalles_productos IS NULL OR p_detalles_productos = '' THEN
        RAISE_APPLICATION_ERROR(-20006, 'El campo "Detalles de Productos" es obligatorio.');
    END IF;

    INSERT INTO TAECPROVEEDORES (
        NOMBRE_PROVEEDOR,
        NOMBRE_CONTACTO,
        PAIS_ORIGEN,
        NUMERO_TELEFONO,
        CORREO_ELECTRONICO,
        DETALLES_PRODUCTOS
    )
    VALUES (
        p_nombre_proveedor,
        p_nombre_contacto,
        p_pais_origen,
        p_numero_telefono,
        p_correo_electronico,
        p_detalles_productos
    );

    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        RAISE_APPLICATION_ERROR(-20007, 'El correo electrónico ya está registrado para otro proveedor.');

    WHEN OTHERS THEN
        RAISE_APPLICATION_ERROR(-20008, 'Error al registrar el proveedor: ' || SQLERRM);
END;
```

## Lógica del Procedimiento

1. Verifica que los campos obligatorios no estén vacíos o nulos.
2. Inserta los datos del proveedor en la tabla `TAECPROVEEDORES`.
3. Realiza `COMMIT` para guardar los cambios.
4. Maneja errores de duplicación de índice (correo electrónico repetido).
5. Captura otros errores con un mensaje descriptivo.

## Dependencias

- Tabla: `TAECPROVEEDORES`

## Ejemplo de uso

```plsql
BEGIN
  insertar_proveedor(
    p_nombre_proveedor    => 'Frutas del Sol',
    p_nombre_contacto     => 'María Pérez',
    p_pais_origen         => 'Colombia',
    p_numero_telefono     => '+57 311 0000000',
    p_correo_electronico  => 'contacto@frutasdelsol.com',
    p_detalles_productos  => 'Mangos, piñas y guayabas tropicales.'
  );
END;
``` 