---
sidebar_position: 1
sidebar_label: Documentación TAECSOLICITUD_PEDIDOS_DETALLE
---

# Tabla `TAECSOLICITUD_PEDIDOS_DETALLE`

Esta tabla representa el detalle de los productos asociados a cada solicitud de pedido, permitiendo una relación de uno a muchos entre las solicitudes y los productos solicitados.

## Estructura de la tabla

| Columna              | Tipo de dato    | Restricciones  | Descripción                                                       |
|----------------------|-----------------|----------------|-------------------------------------------------------------------|
| `IDSOLICITUD_PEDIDO` | `NUMBER`        | `NOT NULL`     | Identificador de la solicitud de pedido. Clave foránea que referencia a `TAECSOLICITUD_PEDIDOS.SOLICITUD_ID`. |
| `IDPRODUCTO`         | `VARCHAR2(40)`  | `NOT NULL`     | Identificador del producto solicitado.                            |

## Relaciones y restricciones

- **Clave foránea**:  
  - `TAECSOLICITUD_PEDIDOS_DETA_FK`  
    - Relación con la tabla `TAECSOLICITUD_PEDIDOS`.
    - Campo relacionado: `IDSOLICITUD_PEDIDO` → `SOLICITUD_ID`.

## Código fuente

```sql
CREATE TABLE "TAECSOLICITUD_PEDIDOS_DETALLE" (
  "IDSOLICITUD_PEDIDO" NUMBER NOT NULL ENABLE,
  "IDPRODUCTO" VARCHAR2(40) NOT NULL ENABLE
) NO INMEMORY;

ALTER TABLE "TAECSOLICITUD_PEDIDOS_DETALLE" 
  ADD CONSTRAINT "TAECSOLICITUD_PEDIDOS_DETA_FK" 
  FOREIGN KEY ("IDSOLICITUD_PEDIDO")
  REFERENCES "TAECSOLICITUD_PEDIDOS" ("SOLICITUD_ID") ENABLE;
