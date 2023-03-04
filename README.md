# Proyectoangular

Este proyecto es una aplicación web construida con Angular 14.2.5. La aplicación utiliza la API de Github para mostrar información de los usuarios y repositorios de Github.

El proyecto es responsive basado en Bootstrap 5.2, es de uso muy facil. Se adapta para uso en moviles y tambien el equipos de escritorio.

Use el CDN DE BOOTSTRAP "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"

Para los iconos use fontawesome "https://kit.fontawesome.com/8a5a484aee.js"

Tengo una pagina de dashboard,para adminitracion  https://github.com/aguadis/proyectoangular/tree/master/src/app/dashboard

Tengo un login solo para el administrador https://github.com/aguadis/proyectoangular/tree/master/src/app/login

Hice una wiki para alojar pequeñas cosas. pero todavia no la se usar https://github.com/aguadis/proyectoangular/wiki/_new



## Instalación

Para instalar y ejecutar mi proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
git clone https://github.com/aguadis/proyectoangular.git


2. Navega al directorio del proyecto:
cd proyectoangular


3. Instala las dependencias:
npm install


4. Ejecuta el servidor de desarrollo:
ng serve


5. Abre el navegador y navega a `http://localhost:4200/`.


## Cómo usar

La aplicación permite buscar y ver la información de los usuarios y repositorios de Github. Para buscar un usuario,(https://github.com/aguadis) escribe el nombre de usuario en el campo de búsqueda y presiona enter. La aplicación mostrará información del usuario y sus repositorios.

Para ver más detalles de un repositorio, podes hacerclic en el enlace del repositorio. La aplicación mostrará información detallada del repositorio, incluyendo la lista de commits más recientes.


## Licencia

Este proyecto está bajo mi licencia. Para más información, consulta el archivo LICENSE.md.
( ©Copyright Cintia L. Necol 2022. All rights reversed)


## Estado del proyecto

Este proyecto está en fase de desarrollo y aún puede haber cambios significativos. Si encuentras algún problema o tienes alguna sugerencia, por favor, házmelo saber a través de Github.

## Recursos adicionales

- Tutorial y estudio:  Canal donde pase los mejores dias de cursado. Conoci muchas personas, agradezco la ayuda que brindo a todos los compañeros, nuestra amiga y compañera Gabriela. este es el canal que ella con tanto cariño y paciencia nos acompaña https://www.youtube.com/@ProgramaTK
- Video: mis compañeros de 3er edicion solucionando errores en el proyecto Angular: https://www.youtube.com/watch?v=uyEOCiOy5rQ&list=PL1oXSbt2OIbGud1tuMPMZrkXZSDifUcEU&index=15
- Ejemplo de código: Implementación de autenticación con Angular: https://github.com/aguadis/proyectoangular/blob/master/src/app/servicios/autenticacion.service.ts



#Dashboard (metodos que implemento)

En el código del componente "Modal***Component" de Angular. Se importan los módulos necesarios de Angular, como "Component", "OnInit", "FormBuilder", "FormGroup" y "Validators", y también se importan dos clases externas del proyecto,( ejemplo: "Persona" y "PersonaService").

El componente tiene una variable "form" de tipo FormGroup para manejar el formulario y un arreglo "item" de tipo (Persona) para almacenar los datos de las personas. También hay varias variables para manejar la validación de los campos del formulario.

En el constructor, se crea un grupo de controles para el formulario utilizando el método "group" del FormBuilder. Los controles son los campos del formulario que se van a validar y a enviar al servidor. El formulario tiene los campos( "nombre", "apellido", "url_banner", "foto_perfil", "acerca", "frase", "email", "password" e "id").

En el método "ngOnInit", se llama al método ("cargarPersona") para cargar la lista (de personas) desde el servidor.

El método "onLoadModal" se utiliza para cargar los datos (de una persona) en el formulario. Recibe como argumento un objeto "item" de tipo (Persona) y utiliza los métodos "setValue" del FormGroup para asignar los valores correspondientes a los campos del formulario.

El método ("cargarPersona") se utiliza para obtener la lista (de personas) desde el servidor mediante el servicio ("sPersona"). Se suscribe a la respuesta del servidor y asigna los datos recibidos a la variable ("persona").

El método "cargarDetalle" se utiliza para obtener los detalles (de una persona) desde el servidor mediante el servicio ("sPersona"). Recibe como argumento el ID (de la persona) y utiliza el método "getById" del servicio para obtener los detalles. Se suscribe a la respuesta del servidor y utiliza el método "setValue" del FormGroup para asignar los valores correspondientes a los campos del formulario.

El método "guardar" se utiliza para enviar los datos del formulario al servidor mediante el servicio ("sPersona"). Si el formulario tiene un ID vacío, significa que se está creando (una nueva persona) y se utiliza el método "save" del servicio para enviar los datos al servidor. Si el formulario tiene un ID existente, significa que se está editando (una persona existente) y también se utiliza el método "save" del servicio para enviar los datos al servidor.

El método "borrar" se utiliza para eliminar (una persona existente) del servidor mediante el servicio ("PersonaService"). Se muestra un mensaje de confirmación antes de eliminar (la persona).

El método "reset" se utiliza para restablecer el formulario a su estado inicial.

