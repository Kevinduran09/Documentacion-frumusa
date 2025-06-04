---
sidebar_position: 1
sidebar_label: Documentación TAECCLIENTES
---

# Tabla TAECCLIENTES

La tabla `TAECCLIENTES` almacena la información de los clientes registrados en el sistema. Contiene datos generales como identificación, tipo de cliente, información de contacto y credenciales de acceso.

## Estructura de la Tabla

| Nombre de Campo      | Tipo de Dato   | Nulo | Llave | Descripción                                          |
|----------------------|----------------|------|-------|------------------------------------------------------|
| NUMEROIDENTIFICACION | VARCHAR(20)    | No   | PK    | Identificador único del cliente                     |
| TIPOCLIENTE          | VARCHAR(8)     | Sí   |       | Clasificación o tipo del cliente                    |
| NOMBRECOMPLETO       | VARCHAR(100)   | Sí   |       | Nombre completo del cliente                         |
| RESIDENCIA           | VARCHAR(100)   | Sí   |       | Dirección o lugar de residencia                     |
| TELEFONO             | VARCHAR(20)    | Sí   |       | Número telefónico de contacto                       |
| CORREOELECTRONICO    | VARCHAR(100)   | Sí   |       | Dirección de correo electrónico del cliente         |
| CONTRASENA           | VARCHAR(64)    | No   |       | Contraseña para autenticación en el sistema         |

## Llaves

- **PK (Primary Key):** `NUMEROIDENTIFICACION`

## Descripción General

Esta tabla es fundamental para el sistema, ya que permite gestionar y autenticar a los clientes. El campo `NUMEROIDENTIFICACION` garantiza la unicidad de cada cliente, y el campo `CONTRASENA` es obligatorio para la validación de identidad en los accesos al sistema. 