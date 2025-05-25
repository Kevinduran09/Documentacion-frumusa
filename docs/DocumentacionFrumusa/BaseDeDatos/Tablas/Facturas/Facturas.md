---
sidebar_position: 1
sidebar_label: Documentación TAECFACTURAS
---

# Tabla TAECFACTURAS

La tabla `TAECFACTURAS` registra la información principal de las facturas generadas por las órdenes de compra.

## Estructura de la Tabla

| Nombre de Campo     | Tipo de Dato    | Nulo | Llave | Descripción                                                  |
|---------------------|-----------------|------|-------|--------------------------------------------------------------|
| ID_FACTURA          | NUMBER          | No   | PK    | Identificador único de la factura (usando una secuencia)     |
| NUMERO_FACTURA      | VARCHAR2(12)    | No   |       | Código único asignado a la factura                           |
| FECHA_COMPRA        | DATE            | No   |       | Fecha de emisión de la factura (valor por defecto: SYSDATE)  |
| DETALLES_FACTURA    | BLOB            | Sí   |       | Contenido adicional o adjunto en formato binario             |

## Llaves

- **PK (Primary Key):** `ID_FACTURA`

## Descripción General

La tabla permite almacenar las facturas generadas en el sistema. Incluye identificadores automáticos, códigos de factura, fecha de emisión y un campo para almacenar contenido complementario en formato binario (por ejemplo, el PDF de la factura).