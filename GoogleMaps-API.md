# Google Maps API
## Description
Para nuestro proyecto es importante que tengamos acceso a la API de JavaScript de Google Maps, por lo tanto en este recurso seguirás paso a paso para obtener las credenciales necesarias para integrar dicha API a nuestro proyecto.

## Documentation
- [Official documentation | NPM](https://www.npmjs.com/package/@react-google-maps/api)

## Installation
NPM: ```npm install @react-google-maps/api --save```

## Cómo obtener la API de JavaScript de Google Maps
Lo primero que debes tener en cuenta es que debemos de utilizar una cuenta de Google para poder utilizar el uso de estos recursos. También es posible que te pida validar tu cuenta de facturación para hacer uso de este recurso en tus proyectos.

## Crear cuenta en Google Developers
Para poder hacer uso de las API de Google debemos de registrarnos en [https://developers.google.com/](https://developers.google.com/) para poder tener acceso a la consola administrativa que nos permitirá registrar los servicios que vamos a utilizar.

## Crear las llaves para utilizar la API de JavaScript para Google Maps
Las llaves que utilizaremos es un identificador único que nos permite autenticarnos con los servicios de Google para poderlos utilizar en nuestros proyectos.

En la consola de Google debemos de crear un nuevo proyecto:

![google-console](https://static.platzi.com/media/user_upload/image-1-446dc843-d4b1-4430-ab07-ef8591cf7c0a.jpg)

Una vez creado el proyecto nos movemos a la sección de **“APIS & Services”** y elegimos la opción de **“Enable APIS and Services”**.

![google-console-2](https://static.platzi.com/media/user_upload/IMAGE-2-119cf956-ad1a-43d7-8c75-a7f578e0b45b.jpg)

En esta sección te encontrarás todas las API que Google dispone para habilitar. Utilizaremos el buscador para encontrar la API **“Maps JavaScript API”**.

![google-console-3](https://static.platzi.com/media/user_upload/image-3-46f84180-5b28-4628-a6fa-4573fecb66c1.jpg)

Seleccionamos la API y nos llevará a la pantalla donde habilitaremos el servicio, te invito a leer la documentación, la información proporcionada y lo que implica el uso de esta API.

![google-console-4](https://static.platzi.com/media/user_upload/image-4-f4cad766-e0cc-4cbc-b4d6-3386afb03faa.jpg)

Seleccionamos **“Enable”** este proceso puede tardar un poco en lo que se habilitan los servicios disponibles para el uso de la API.

![google-console-5](https://static.platzi.com/media/user_upload/image-5-337ca630-a0a5-446b-b066-3577030c2694.jpg)

Ahora podemos ver la sección de métricas del uso de la API.

Habilitar las credenciales para el uso de la API de JavaScript para Google Maps:

Una vez habilitada la API podemos ver el menú lateral donde encontraremos la sección **“Credentials”**. Seleccionamos **“Create credentials”** y elegimos la opción de **“API Key”**.

![google-console-6](https://static.platzi.com/media/user_upload/image-6-2eef52fb-32b7-4aaf-b62b-6cb24c7d00a0.jpg)

Esta opción nos creará la API Key que utilizaremos dentro de nuestro proyecto en la próxima clase, guarda de forma segura esta llave y no la compartas.

![google-console-7](https://static.platzi.com/media/user_upload/image-7-96fe2d32-2463-4332-8902-59002634d413.jpg)

Ahora ya tienes la API Key que utilizaremos en nuestro proyecto y cuando agreguemos la integración vamos a ver el código un poco similar a esta forma:

[https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap](https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap)

Te recomiendo leer la [documentación de Google Maps](https://developers.google.com/maps/documentation/javascript/overview) para que puedas ver las opciones que tienes para implementar, así como todas las API que dispone y cómo puedes integrarlas entre sí.

---
**NOTA**: recuerda que el uso de las API de Google pueden generar un costo, te invito a que pases por la sección de precios y puedas revisar a detalle el alcance que tiene el uso de la capa que provee la API y en qué momento empieza a generar un costo para tu servicio.

[https://cloud.google.com/maps-platform/pricing/](https://cloud.google.com/maps-platform/pricing/)