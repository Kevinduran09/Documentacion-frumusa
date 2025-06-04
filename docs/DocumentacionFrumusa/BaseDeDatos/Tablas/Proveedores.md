---
sidebar_position: 1
sidebar_label: Documentación TAECPROVEEDORES
---

# Tabla `TAECPROVEEDORES`

Esta tabla almacena información sobre los proveedores registrados en el sistema, incluyendo detalles de contacto, los productos que ofrecen y el país al que pertenecen.

## Estructura de la tabla

| Columna             | Tipo de dato     | Restricciones                     | Descripción                                                  |
|---------------------|------------------|-----------------------------------|--------------------------------------------------------------|
| `NOMBRE_PROVEEDOR`  | `VARCHAR2(255)`  | `NOT NULL`                        | Nombre de la empresa proveedora.                             |
| `NOMBRE_CONTACTO`   | `VARCHAR2(255)`  | `NOT NULL`                        | Nombre de la persona de contacto dentro del proveedor.       |
| `NUMERO_TELEFONO`   | `VARCHAR2(20)`   | `NOT NULL`                        | Teléfono de contacto del proveedor.                          |
| `CORREO_ELECTRONICO`| `VARCHAR2(255)`  | `NOT NULL`                        | Correo electrónico del proveedor.                            |
| `DETALLES_PRODUCTOS`| `CLOB`           | *(Opcional)*                      | Descripción detallada de los productos que ofrece.           |
| `ID_PAIS`           | `NUMBER`         | `FK` (`FK_PROVEEDORES_PAISES`)    | Clave foránea que refiere al país (`TAECPAISES.ID_PAIS`).    |

## Restricciones y relaciones

- **Clave foránea**:  
  `FK_PROVEEDORES_PAISES`  
  - Relación con la tabla `TAECPAISES`.
  - Campo relacionado: `ID_PAIS`.

## Código fuente

```sql
CREATE TABLE "TAECPROVEEDORES" (
  "NOMBRE_PROVEEDOR" VARCHAR2(255) NOT NULL ENABLE,
  "NOMBRE_CONTACTO" VARCHAR2(255) NOT NULL ENABLE,
  "NUMERO_TELEFONO" VARCHAR2(20) NOT NULL ENABLE,
  "CORREO_ELECTRONICO" VARCHAR2(255) NOT NULL ENABLE,
  "DETALLES_PRODUCTOS" CLOB,
  "ID_PAIS" NUMBER
) NO INMEMORY;

ALTER TABLE "TAECPROVEEDORES" 
  ADD CONSTRAINT "FK_PROVEEDORES_PAISES" 
  FOREIGN KEY ("ID_PAIS")
  REFERENCES "TAECPAISES" ("ID_PAIS") ENABLE;
``` 