---
sidebar_position: 1
sidebar_label: Documentación TAECDETALLES_ORDEN
---

# Tabla TAECDETALLES_ORDEN

La tabla `TAECDETALLES_ORDEN` contiene los registros de los productos asociados a cada orden, incluyendo la cantidad y el precio por unidad.

## Estructura de la Tabla

| Nombre de Campo     | Tipo de Dato   | Nulo | Llave | Descripción                                         |
|---------------------|----------------|------|-------|-----------------------------------------------------|
| DETALLE_ORDEN_ID    | NUMBER         | No   | PK    | Identificador único del detalle de la orden         |
| ORDEN_ID            | NUMBER         | No   | FK    | Referencia a la orden a la que pertenece            |
| PRODUCTO_ID         | NUMBER         | No   | FK    | Referencia al producto incluido en la orden         |
| CANTIDAD            | NUMBER         | No   |       | Cantidad del producto solicitada                    |
| PRECIO              | NUMBER(10,2)   | No   |       | Precio unitario del producto                        |

## Llaves

- **PK (Primary Key):** `DETALLE_ORDEN_ID`
- **FK (Foreign Keys):** `ORDEN_ID`, `PRODUCTO_ID` (relacionan con tablas de órdenes y productos respectivamente)

## Descripción General

Esta tabla permite desglosar los productos asociados a cada orden, así como su cantidad y precio. Es clave para calcular totales y llevar control de los ítems en las facturaciones y despachos.