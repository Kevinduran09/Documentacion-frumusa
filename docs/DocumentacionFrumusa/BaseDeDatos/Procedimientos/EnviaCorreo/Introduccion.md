---
sidebar_position: 1
sidebar_label: Documentación Envia_correo
---

# Procedimiento Envia_correo

Este procedimiento PL/SQL permite enviar correos electrónicos utilizando el paquete `comun.pkgmail`. Admite múltiples destinatarios (`TO` y `CC`), eliminando duplicados entre ambas listas antes del envío.

## Parámetros

| Parámetro         | Tipo        | Dirección | Descripción                                                     |
|------------------|-------------|-----------|-----------------------------------------------------------------|
| P_SENDER         | VARCHAR2    | IN        | Dirección de correo del remitente                              |
| P_RECIPIENT      | VARCHAR2    | IN        | Lista de correos de destinatarios (`TO`) separados por `;`     |
| P_SUBJ           | VARCHAR2    | IN        | Asunto del correo                                              |
| P_BODY           | VARCHAR2    | IN        | Cuerpo del mensaje (texto plano o HTML)                        |
| P_CC_RECIPIENT   | VARCHAR2    | IN        | Lista de correos en copia (`CC`) separados por `;`             |

## Código fuente

```sql
create or replace PROCEDURE EC_PR_Envia_correo (P_SENDER IN VARCHAR2, P_RECIPIENT VARCHAR2, P_SUBJ IN VARCHAR2,
                        P_BODY IN VARCHAR2, P_CC_RECIPIENT IN VARCHAR2) IS
  v_to comun.pkgmail.ARRAY := comun.pkgmail.ARRAY();
  v_cc comun.pkgmail.ARRAY := comun.pkgmail.ARRAY();
  v_cuerpo long;
  v_ind1 NUMBER;
  v_ind2 NUMBER;
  v_ind_verif NUMBER;
  v_ini NUMBER;
  v_fin NUMBER;
  v_encontrado BOOLEAN;
  v_correo VARCHAR2(200);
BEGIN
  IF p_Sender IS NOT NULL AND p_recipient IS NOT NULL AND p_subj IS NOT NULL AND p_body IS NOT NULL AND p_cc_recipient IS NOT NULL THEN
    -- Pasa la lista de correos TO separados por comma a ARRAY
    v_ini := 1; 
    v_ind1 := 0;
    LOOP
      v_fin := instr(p_recipient, ';', v_ini);
      IF v_fin > 0 THEN
        v_correo := substr(p_recipient, v_ini, v_fin - v_ini);
      ELSE
        v_correo := substr(p_recipient, v_ini, length(p_recipient) - v_ini + 1);
      END IF;
      -- Verifica si no existe en la lista TO
      v_ind_verif := 1;
      v_encontrado := FALSE;
      WHILE v_ind_verif < v_ind1 AND v_ind1 > 1  AND v_encontrado = FALSE LOOP
        IF v_to(v_ind_verif) = v_correo THEN
          v_encontrado := TRUE;
        END IF;
        v_ind_verif := v_ind_verif + 1;
      END LOOP;
      -- Si no está registrado lo agrega
      IF NOT v_encontrado THEN
        v_ind1 := v_ind1 + 1;
        v_to.extend();
        v_to(v_ind1) := v_correo;
      END IF;
      IF v_fin = 0 THEN 
        EXIT;
      ELSE
        v_ini := v_fin + 1;
      END IF;
    END LOOP;
    -- Pasa la lista de correos CC separados por comma a ARRAY
    v_ini := 1; 
    v_ind2 := 0;
    LOOP
      v_fin := instr(p_cc_recipient, ';', v_ini);
      IF v_fin > 0 THEN
        v_correo := substr(p_cc_recipient, v_ini, v_fin - v_ini);
      ELSE
        v_correo := substr(p_cc_recipient, v_ini, length(p_cc_recipient) - v_ini + 1);
      END IF;
      -- Verifica si no existe en la lista TO
      v_ind_verif := 1;
      v_encontrado := FALSE;
      WHILE v_ind_verif <= v_ind1  AND v_encontrado = FALSE LOOP
        IF v_to(v_ind_verif) = v_correo THEN
          v_encontrado := TRUE;
        END IF;
        v_ind_verif := v_ind_verif + 1;
      END LOOP;
      -- Verifica si no existe en la lista CC
      v_ind_verif := 1;
      WHILE v_ind_verif < v_ind2 AND v_ind2 > 1 AND v_encontrado = FALSE LOOP
        IF v_cc(v_ind_verif) = v_correo THEN
          v_encontrado := TRUE;
        END IF;
        v_ind_verif := v_ind_verif + 1;
      END LOOP;
      IF NOT v_encontrado THEN
        v_ind2 := v_ind2 + 1;
        v_cc.extend();
        v_cc(v_ind2) := v_correo;
      END IF;
      IF v_fin = 0 THEN 
        EXIT;
      ELSE
        v_ini := v_fin + 1;
      END IF;
    END LOOP;
    v_cuerpo := p_body;
    comun.pkgmail.enviar(p_sender, p_sender, v_to, v_cc, p_subj, v_cuerpo, FALSE);
  END IF;
END;
```

## Lógica del procedimiento

1. **Validación inicial**: Verifica que todos los parámetros de entrada no sean nulos.
2. **Procesamiento de destinatarios `TO`**:
   - Divide la cadena `P_RECIPIENT` usando `;` como separador.
   - Agrega cada correo a un array `v_to`, evitando duplicados.
3. **Procesamiento de destinatarios `CC`**:
   - Divide la cadena `P_CC_RECIPIENT` usando `;`.
   - Agrega a `v_cc` los correos que no estén ya en `v_to` ni en `v_cc`, evitando duplicados.
4. **Envío del correo**:
   - Llama al método `comun.pkgmail.enviar` con todos los parámetros, incluyendo remitente, destinatarios `TO`, `CC`, asunto y cuerpo del mensaje.

## Dependencias

- Paquete: `comun.pkgmail`
- Tipo: `comun.pkgmail.ARRAY`
- Método: `enviar`

## Consideraciones

- El procedimiento ignora parámetros vacíos o nulos y no lanza errores explícitos si la validación inicial falla.
- No realiza validación de formato de correos electrónicos.
- Se espera que `comun.pkgmail` maneje la capa de transporte SMTP o servicio equivalente.

## Ejemplo de uso

```plsql
BEGIN
  EC_PR_Envia_correo(
    P_SENDER => 'soporte@empresa.com',
    P_RECIPIENT => 'cliente1@correo.com;cliente2@correo.com',
    P_SUBJ => 'Confirmación de Pedido',
    P_BODY => 'Su pedido ha sido recibido con éxito.',
    P_CC_RECIPIENT => 'supervisor@empresa.com'
  );
END;
```