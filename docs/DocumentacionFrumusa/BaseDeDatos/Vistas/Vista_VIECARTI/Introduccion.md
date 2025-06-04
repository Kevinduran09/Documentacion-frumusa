---
sidebar_position: 2
sidebar_label: Vista VIECARTI
---

# Vista VIECARTI

La vista `VIECARTI` unifica información de artículos disponibles, sus precios , clasificaciones y categorías. Está pensada para ofrecer una visión consolidada de los productos activos, incluyendo descripciones enriquecidas desde otras tablas relacionadas.

## Columnas de la vista

| Columna         | Tipo     | Descripción                                                             |
|-----------------|----------|-------------------------------------------------------------------------|
| NO_CIA          | VARCHAR2 | Identificador de la compañía                                            |
| NO_ARTI         | VARCHAR2 | Código del artículo                                                     |
| DESCRIPCION     | VARCHAR2 | Descripción del artículo                                                |
| UNIDAD          | VARCHAR2 | Unidad de medida                                                        |
| PRECIO          | NUMBER   | Precio registrado del artículo                                   |
| CLASE           | VARCHAR2 | Código de la clase del artículo                                         |
| DESC_CLASE      | VARCHAR2 | Descripción de la clase (desde la tabla `ARINCA`)                       |
| CATEGORIA       | VARCHAR2 | Código de la categoría del artículo                                     |
| DESC_CATEGORIA  | VARCHAR2 | Descripción de la categoría (desde la tabla `ARINCAT`)                  |



## Código fuente

```sql
CREATE OR REPLACE FORCE EDITIONABLE VIEW "VIECARTI" (
  "NO_CIA", "NO_ARTI", "DESCRIPCION", "UNIDAD", "PRECIO", 
  "CLASE", "DESC_CLASE", "CATEGORIA", "DESC_CATEGORIA"
) AS 
  SELECT d.no_cia,
         d.no_arti,
         d.descripcion,
         d.unidad,
         p.precio,
         d.clase,
         c.descripcion   desc_clase,
         d.categoria,
         t.descripcion   desc_categoria
    FROM arinda   d,
         arinca   c,
         arincat  t,
         (  SELECT no_cia, codigo, MIN (precio) precio
              FROM in53.arintp
          GROUP BY no_cia, codigo) p
   WHERE     d.no_cia = p.no_cia
         AND d.no_arti = p.codigo
         AND d.no_cia = c.no_cia
         AND d.clase = c.codigo
         AND d.no_cia = t.no_cia
         AND d.clase = t.clase
         AND d.categoria = t.codigo
         AND d.ind_activo = 'S';
```

## Lógica de la vista

1- Filtra solo artículos activos (ind_activo = 'S') desde ARINDA.

2- Obtiene el precio mínimo para cada artículo desde IN53.ARINTP.

3- Relaciona los artículos con sus clases (ARINCA) y categorías (ARINCAT) para enriquecer la información.

4- Devuelve un conjunto unificado con identificadores, descripciones y precios.

## Dependencias

ARINDA: Información base del artículo.

IN53.ARINTP: Precios de los artículos.

ARINCA: Catálogo de clases de artículos.

ARINCAT: Catálogo de categorías de artículos.

## Ejemplo de uso
```sql
-- Obtener los primeros 10 artículos con su descripción, clase y precio
SELECT 
  NO_ARTI, 
  DESCRIPCION, 
  DESC_CLASE, 
  PRECIO
FROM 
  VIECARTI
WHERE 
  NO_CIA = '01'
ORDER BY 
  DESCRIPCION
FETCH FIRST 10 ROWS ONLY;
```