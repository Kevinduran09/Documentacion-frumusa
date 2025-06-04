---
sidebar_position: 1
sidebar_label: Documentación TAECPRODUCTOS
---

# Tabla TAECPRODUCTOS

La tabla `TAECPRODUCTOS` almacena la información completa sobre los productos disponibles en el sistema, incluyendo su precio, imagen, y detalles técnicos.

## Estructura de la Tabla

| Nombre de Campo              | Tipo de Dato     | Nulo | Llave | Descripción                                                       |
|------------------------------|------------------|------|-------|-------------------------------------------------------------------|
| ID_PRODUCTO                  | NUMBER           | No   | PK    | Identificador único del producto                                  |
| NOMBRE_PRODUCTO             | VARCHAR2(255)    | No   |       | Nombre del producto                                               |
| PRECIO_UNITARIO             | NUMBER(10,2)     | Sí   |       | Precio unitario del producto                                      |
| IMAGEN_PRODUCTO             | BLOB             | Sí   |       | Imagen del producto en formato binario                            |
| TIPO_MIME_IMAGEN            | VARCHAR2(512)    | Sí   |       | Tipo MIME de la imagen (ej. image/jpeg, image/png)                |
| NOMBRE_ARCHIVO_IMAGEN       | VARCHAR2(512)    | Sí   |       | Nombre original del archivo de imagen                             |
| CHARSET_IMAGEN              | VARCHAR2(512)    | Sí   |       | Codificación de caracteres de la imagen (si aplica)               |
| IMAGEN_ULTIMA_ACTUALIZACION | DATE             | Sí   |       | Fecha de la última actualización de la imagen                     |
| TIPO_FRUTA                  | VARCHAR2(255)    | Sí   |       | Clasificación del producto según el tipo de fruta                 |
| DETALLES_PRODUCTO           | VARCHAR2(905)    | Sí   |       | Descripción ampliada o especificaciones del producto              |

## Llaves

- **PK (Primary Key):** `ID_PRODUCTO`

## Descripción General

Esta tabla permite gestionar el catálogo de productos incluyendo toda la información relevante para visualización, búsqueda y gestión logística. Contempla soporte para imágenes y metadatos asociados, permitiendo así una experiencia rica en contenido para los usuarios y operadores del sistema. 