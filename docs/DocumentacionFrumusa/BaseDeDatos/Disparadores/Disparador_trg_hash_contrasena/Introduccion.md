---
sidebar_position: 4
sidebar_label: Documentación trg_hash_contrasena
---

# Disparador `trg_hash_contrasena`

Este disparador PL/SQL se ejecuta **antes de insertar** un nuevo registro en la tabla `TAECCLIENTES`. Su función es **convertir la contraseña en un hash** utilizando el algoritmo `SHA-256` mediante el paquete `DBMS_CRYPTO`.

## Tipo de disparador

| Tipo             | Valor                             |
|------------------|------------------------------------|
| Momento          | BEFORE INSERT                     |
| Nivel            | ROW (para cada fila)              |
| Tabla afectada   | `TAECCLIENTES`                    |
| Columna afectada | `CONTRASENA`                      |
| Seguridad        | Algoritmo `SHA-256` (`HASH_SH256`) |

## Lógica del disparador

1. El trigger se activa antes de insertar un nuevo registro en la tabla `TAECCLIENTES`.
2. Toma el valor original de la contraseña (`:NEW.CONTRASENA`).
3. Convierte el texto en formato RAW con codificación `AL32UTF8`.
4. Aplica el algoritmo de hash `SHA-256` utilizando `DBMS_CRYPTO.HASH`.
5. Convierte el resultado RAW a una representación hexadecimal (`RAWTOHEX`).
6. Asigna este valor a `:NEW.CONTRASENA`, sobrescribiendo el valor original.

## Código fuente

```sql
CREATE OR REPLACE TRIGGER trg_hash_contrasena
BEFORE INSERT ON "TAECCLIENTES"
FOR EACH ROW
BEGIN
  -- Hashea la contraseña antes de insertarla
  :NEW."CONTRASENA" := RAWTOHEX(
    DBMS_CRYPTO.HASH(
      UTL_I18N.STRING_TO_RAW(:NEW."CONTRASENA", 'AL32UTF8'),
      DBMS_CRYPTO.HASH_SH256
    )
  );
END;
