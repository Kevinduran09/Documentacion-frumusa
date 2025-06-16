# Perfil de Usuario

## Descripción General
La vista de Perfil de Usuario permite a los usuarios visualizar y gestionar su información personal dentro de la plataforma InterFrutd. Incluye la visualización de datos personales, la opción de editar información y la funcionalidad para cerrar sesión. El diseño es responsivo y está orientado a la usabilidad, asegurando una experiencia clara y sencilla.


## Imágenes de la Vista
### Vista del Perfil de usuario

<img src="/img/perfil-usuario-vista.png" alt="Vista del Perfil de Usuario" width="350" />

### Edición de perfil de usuario
<img src="/img/editar-perfil-vista.png" alt="Edición de Perfil de Usuario" width="350" />

### Confirmación de cierre de sesion
<img src="/img/cerrar-sesion-vista.png" alt="Confirmación de cierre de sesión" width="350" />


## Estructura de la Vista

### Contenido Principal
- **Tabs de navegación interna:**
  - Vista del Perfil: muestra la información personal del usuario.
  - Editar Información: permite modificar los datos personales.
- **Información Personal:**
  - Foto de perfil (placeholder si no hay imagen).
  - Nombre completo (solo lectura en vista, editable en edición).
  - Correo electrónico (solo lectura, no editable).
  - Teléfono celular (editable).
  - Cédula (solo lectura, no editable).
  - Residencia (editable).
- **Acciones:**
  - Editar Perfil: cambia a modo edición.
  - Cerrar Sesión: finaliza la sesión del usuario.
- **Modo Edición:**
  - Los campos editables se habilitan.
  - El correo electrónico y la cédula permanecen bloqueados.
  - Botones: Guardar Cambios y Cancelar.


## Diseño y UX
- Uso de colores institucionales (verde, blanco, gris).
- Componentes: Inputs, botones, tabs, cards.
- Accesibilidad: Contraste adecuado, botones grandes y claros.
- Responsive: Adaptable a dispositivos móviles y escritorio.
- Feedback visual: Los campos no editables están deshabilitados y con texto aclaratorio.

## Funcionalidades Técnicas

### Visualización de Datos
- Los datos del usuario se obtienen del backend y se muestran en campos de solo lectura.
- La foto de perfil puede ser un placeholder si el usuario no ha subido una imagen.

### Edición de Perfil
- Al hacer clic en "Editar Perfil", los campos editables se habilitan.
- El correo electrónico y la cédula no pueden ser modificados por seguridad.
- Validación de campos (por ejemplo, formato de teléfono).
- Al guardar, se envía una petición al backend para actualizar los datos.
- Mensajes de éxito o error tras la actualización.

### Cierre de Sesión
- El botón "Cerrar Sesión" elimina la sesión activa y redirige usuario.




## Partes Principales

### 1. Información Personal
- Foto de perfil
- Nombre completo
- Correo electrónico
- Teléfono
- Fecha de nacimiento
- Contraseña

