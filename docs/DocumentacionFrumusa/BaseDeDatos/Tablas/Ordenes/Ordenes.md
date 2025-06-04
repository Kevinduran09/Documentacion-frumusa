---
sidebar_position: 1
sidebar_label: Documentación TAEC_ORDENES
---

# Tabla TAEC_ORDENES

La tabla `TAEC_ORDENES` almacena la información de las órdenes realizadas por los clientes en la plataforma, incluyendo la tienda, fecha y el monto total del pedido.

## Estructura de la tabla

| Columna               | Tipo de dato     | Restricciones                         | Descripción                                  |
|-----------------------|------------------|----------------------------------------|----------------------------------------------|
| ID_ORDEN              | NUMBER           | PRIMARY KEY, AUTO INCREMENT, NOT NULL | Identificador único de la orden              |
| NUMEROIDENTIFICACION  | VARCHAR2(20)     | NOT NULL, FOREIGN KEY                 | Identificación del cliente que realiza la orden |
| TIENDA                | NUMBER           | NOT NULL                              | Código de la tienda asociada a la orden      |
| FECHA_ORDEN           | DATE             | DEFAULT SYSDATE                       | Fecha en que se generó la orden              |
| TOTAL                 | NUMBER(10,2)     | DEFAULT 0                             | Monto total del pedido                       |

## Restricciones

- **PK_ID_ORDEN**: Llave primaria sobre la columna `ID_ORDEN`.
- **FK_ORDEN_CLIENTE**: Llave foránea que referencia a `TAECCLIENTES(NUMEROIDENTIFICACION)` para asociar la orden con un cliente registrado.

## Descripción general

- La columna `ID_ORDEN` se genera automáticamente con un valor incremental, garantizando unicidad en cada orden.
- Se relaciona cada orden con un cliente mediante su número de identificación (`NUMEROIDENTIFICACION`).
- La columna `TIENDA` identifica a qué tienda pertenece la orden.
- La columna `FECHA_ORDEN` se asigna automáticamente con la fecha actual al momento de la creación del registro.
- El campo `TOTAL` representa el monto total asociado a la orden.

## Dependencias

- **Tabla relacionada**: `TAECCLIENTES`
- **Llave foránea**: `NUMEROIDENTIFICACION`

## Ejemplo de inserción

```sql
INSERT INTO TAEC_ORDENES (NUMEROIDENTIFICACION, TIENDA, TOTAL)
VALUES ('1234567890', 1, 89.99);
