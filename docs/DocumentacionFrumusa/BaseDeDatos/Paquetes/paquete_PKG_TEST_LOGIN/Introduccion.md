---
sidebar_position: 2
sidebar_label: Documentación PKG_TEST_LOGIN
---

# Paquete PKG_TEST_LOGIN

Este paquete PL/SQL tiene como objetivo realizar pruebas unitarias manuales para la función `FN_CUSTOM_LOGIN`, utilizando procedimientos que comparan resultados esperados con resultados reales y muestran los resultados por consola con `DBMS_OUTPUT`.

## Procedimientos

### `RUN_ALL_TESTS`

Ejecuta una serie de pruebas predefinidas sobre la función `FN_CUSTOM_LOGIN`, verificando distintos escenarios comunes del proceso de inicio de sesión.

### `TEST_CASE`

Procedimiento auxiliar que compara un resultado esperado (`p_expected`) con un resultado actual (`p_actual`). Muestra por consola si la prueba pasó (`OK`) o falló (`FALLÓ`) junto con detalles.

## Parámetros de `TEST_CASE`

| Parámetro   | Tipo     | Descripción                                               |
|-------------|----------|-----------------------------------------------------------|
| p_desc      | VARCHAR2 | Descripción del caso de prueba                            |
| p_expected  | VARCHAR2 | Resultado esperado                                         |
| p_actual    | VARCHAR2 | Resultado real (devuelto por la función probada)          |

## Lógica del paquete

1. `RUN_ALL_TESTS` ejecuta tres casos de prueba que evalúan la función `FN_CUSTOM_LOGIN`:
   - Inicio de sesión exitoso.
   - Contraseña incorrecta.
   - Usuario inexistente.
2. `TEST_CASE` se encarga de comparar los resultados y emitir el veredicto por consola.
3. Se utiliza `DBMS_OUTPUT.PUT_LINE` para mostrar los resultados, por lo que debe estar habilitado en el entorno (por ejemplo, en SQL Developer o APEX SQL Workshop).

## Dependencias

- **Función:** `FN_CUSTOM_LOGIN`
- **Entradas esperadas:** número de identificación del cliente y contraseña
