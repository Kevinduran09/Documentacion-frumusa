---
sidebar_position: 1
sidebar_label: Documentación TAECPAISES
---

# Tabla TAECPAISES

La tabla `TAECPAISES` contiene el catálogo de países disponibles en el sistema, utilizados para referenciar la residencia o nacionalidad de los proveedores.

## Estructura de la Tabla

| Nombre de Campo  | Tipo de Dato    | Nulo | Llave | Descripción                                              |
|------------------|-----------------|------|-------|----------------------------------------------------------|
| ID_PAIS          | NUMBER          | No   | PK    | Identificador único del país                             |
| NOMBRE_PAIS      | VARCHAR2(100)   | No   |       | Nombre del país                                          |

## Llaves

- **PK (Primary Key):** `ID_PAIS`

## Descripción General

La tabla almacena los países registrados que pueden ser asociados a los proveedores o entidades del sistema. Permite mantener la integridad y normalización de los datos geográficos dentro de la base.