---
sidebar_position: 2
sidebar_label: Documentación TEECIMAGENES
---

# Tabla TEECIMAGENES

La tabla `TEECIMAGENES` almacena las imágenes asociadas a artículos de la plataforma. Cada imagen está vinculada mediante un código único de artículo.

## Estructura de la tabla

| Columna         | Tipo de dato     | Restricciones     | Descripción                                  |
|------------------|------------------|--------------------|----------------------------------------------|
| CODIGOARTICULO   | VARCHAR2(255)    |                    | Código que identifica al artículo            |
| IMAGEN           | BLOB             | NOT NULL           | Imagen binaria asociada al artículo          |

## Restricciones

- No se define una clave primaria explícita.
- No se especifican claves foráneas en esta tabla (aunque se espera que `CODIGOARTICULO` esté relacionado con una tabla de productos o artículos).

## Descripción general

- La columna `CODIGOARTICULO` sirve como identificador para vincular la imagen con un artículo específico.
- La columna `IMAGEN` almacena la imagen en formato binario (BLOB), permitiendo guardar archivos como JPG, PNG, etc.
- Esta tabla permite múltiples imágenes por artículo si se desea (aunque no está restringido ni gestionado directamente desde la estructura actual).

## Consideraciones

- Se recomienda normalizar el campo `CODIGOARTICULO` mediante una relación con una tabla principal de productos (por ejemplo, `TAECPRODUCTOS(ID_PRODUCTO)`).
- Es responsabilidad de la lógica de la aplicación asegurar la integridad referencial si no se define a nivel de base de datos. 