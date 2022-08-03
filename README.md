# Platzi Conf Merch | React
## Documentations
- [useRef](https://reactjs.org/docs/hooks-reference.html#useref).

## Dependencies
### React & React Router DOM
- React and React-DOM: ```npm i react react-dom```.
- React Router DOM: ```npm i react-router-dom```.

### Webpack & loaderes
- Webpack: ```npm i webpack webpack-cli webpack-dev-server --save-dev```.
- HTML loaders: ```npm i html-webpack-plugin html-loader --save-dev```.

### Babel & loaders
- Babel: ```npm i babel-loader @babel/preset-env @babel/preset-react @babel/core --save-dev```.

### CSS loader, plugins & preprocessor
- CSS loader & mini css plugin: ```npm i css-loader mini-css-extract-plugin --save-dev```.

### Dotenv for webpack
- doyenv: ```npm install --save-dev dotenv-webpack```.

```
// webpack.config.js
const Dotenv = require('dotenv-webpack');
 
module.exports = {
  ...
  plugins: [
    new Dotenv()
  ]

};
```

#### Preprocessor
##### Sass
- Sass: ```npm install --save-dev sass-loader node-sass```.
```
{
	test: /\.scss$/,
	loader: [
		MiniCSSExtractPlugin.loader,
		'css-loader',
		'sass-loader'
	]
}
```
##### Less
- Less: ```npm install --save-dev less less-loader```.
```
{
	test: /\.less$/,
	loader: [
		MiniCSSExtractPlugin.loader,
		'css-loader',
		'less-loader'
	]
}
```
##### Stylus
- Stylus: ```npm install --save-dev stylus stylus-loader```.
```
{
	test: /\.styl$/,
	loader: [
		MiniCSSExtractPlugin.loader,
		'css-loader',
		'stylus-loader'
	]
}
```
### Helmet | SEO
#### Installation
**NPM**: ```npm i react-helmet --save```

-[Curso de Introducción a SEO: Posicionamiento en Buscadores](https://platzi.com/cursos/seo/)
-[Curso de SEO Técnico](https://platzi.com/cursos/seo-tecnico/)
-[Curso de Estrategia y Planeación de Contenidos para SEO](https://platzi.com/cursos/contenido-seo/)
-[Curso de Buenas Prácticas de SEO](https://platzi.com/cursos/seo-recomendaciones/)
-[El SEO es más que un buen título](https://platzi.com/blog/seo-mas-que-un-titulo/)
-[¡NO, SEO no es para que aparezcas primero en Google!](https://platzi.com/blog/seo-para-posicionar-al-usuario/)
-[El SEO es más que un buen título](https://platzi.com/blog/seo-mas-que-un-titulo/)

## Configurations
### ESLint
- Install ESLint globally: ```npm i -g eslint```.
- Install ESLint in project: ```npm install eslint @babel/eslint-parser eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -D```.
- [ESLint Extension | Visual Studio Code - Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Prettier
- Install Prettier in project: ```npm i prettier eslint-plugin-prettier eslint-config-prettier --save-dev```.

### Husky
- Install Husky: ```npm install husky --save-dev```.
In **package.json**:
```
"husky": {
    "hooks": {
      "pre-commit": "npm test", 
      "pre-push": "npm test",
      "...": "..."
    }
  }
```

## Third-party libraries
### PayPay API
Read **PayPal-API.md** file to reference.
### Google Maps API
Read **GoogleMaps-API.md** file to reference.
### LeafletcAPI
Read **Leaflet-API.md** file to reference.
### Others
-[locationiq | alternative to Geocoding API by Google](https://locationiq.com/)

## Others References
### CI/CD
-[Curso de Introducción al Despliegue de Aplicaciones](https://platzi.com/cursos/despliegue-apps/)
-[Continuous Integration, Continuous Delivery y Continuous Deployments](https://platzi.com/blog/continuous-integration-continuous-delivery-y-continuous-deployments/)
-[GitHub Action for Firebase](https://github.com/marketplace/actions/github-action-for-firebase)

### GitHub
-[Cambios en GitHub: de master a main](https://platzi.com/blog/cambios-en-github-master-main/)

### PWA
Preparemos nuestra aplicación para convertirla en una PWA
___
​
Lo primero que tenemos que crear es nuestro service-worker.js dentro de la carpeta /public:​

```
const doCache = false;
const CACHE_NAME = 'pwa-cache';
​
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log(`Deleting cache: ${key}`)
            return caches.delete(key);
          }
        }))
      )
  );
});
​
self.addEventListener('install', function (event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          fetch("manifest.json")
            .then(response => {
              response.json()
            })
            .then(assets => {
              const urlsToCache = [
                "/",
                assets["bundle.js"]
              ]
              cache.addAll(urlsToCache)
              console.log('cached');
            })
        })
    );
  }
});
​
self.addEventListener('fetch', function (event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});
```
​
La configuración previa nos permite registrar nuestra aplicación debidamente. Ahora vamos a crear el archivo de configuración donde podremos agregar el nombre de nuestra aplicación, ícono entre otras características importantes que describen la aplicación.
​
Crear el archivo manifest.json en la carpeta /public:
```
{
  "short_name": "Platzi Conf Store",
  "name": "A simple Store",
  "icons": [
    {
      "src": "assets/icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "background_color": "#222",
  "theme_color": "#222",
  "display": "standalone"
}
​
```

Descarga el ícono de React de la sección de recursos y agrégalo a la carpeta /public.​

Configurando Webpack para copiar los archivos necesarios al compilar el proyecto:
___

Para continuar con el proceso de la construcción de la PWA es necesario instalar un plugin para webpack que nos ayudará a copiar los archivos de la carpeta /public a la carpeta de nuestro proyecto compilado.
​

```npm install copy-webpack-plugin --save-dev```
​
Una vez instalado, es necesario agregar la configuración necesaria en el archivo wepack.config.js
​
Primero importamos copy-webpack-plugin en la parte superior del archivo
​

const CopyPlugin = require('copy-webpack-plugin');
​
Agregamos la configuración necesaria en la sección de plugins:
​
```
new CopyPlugin({
	patterns: [
	{ from: 'public/manifest.json', to: '' },
	{ from: 'public/service-worker.js', to: '' },
	{ from: 'public/icon.png', to: 'assets' },
	],
}),
```

En este caso estamos agregando 3 elementos a la carpeta dist, el primero es nuestro archivo manifest, luego agrega el archivo service-worker.js y al final el archivo icon.png, de esta forma al compilar el proyecto podemos disponer de estos archivos dentro del compilado final.
​

Agregar service worker a index.html
___

Una de las tareas que tenemos que realizar antes de probar nuestra aplicación es agregar el soporte del service worker al proyecto creando la lógica siguiente dentro de index.html.
​
```
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('service-worker.js').then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function (err) {
        console.log('ServiceWorker registration failed: ', err);
      }).catch(function (err) {
        console.log(err)
      });
    });
  } else {
    console.log('service worker is not supported');
  }
</script>
```

Ahora demos de agregar la referencia al archivo manifest.json dentro de la etiqueta <head>:
​

```<link rel="manifest" href="/manifest.json">```
​
Una vez agregado el script y la referencia al manifest dentro del archivo index.html procedemos a compilar el proyecto:
​
```npm run build```

Cuando termina el proceso podemos revisar la carpeta /dist que ha generado Webpack y revisar que tenemos dentro el archivo manifest.json así como el archivo service-worker.js y dentro de assets el ícono que vamos a utilizar.
​
Ahora podemos correr el proyecto y comprobar que tenemos el registro del service worker y la información de nuestra aplicación:
​

```npm run start```
​
Service worker registrado correctamente:

![pwa-1.PNG](https://static.platzi.com/media/user_upload/pwa-1-6bb219e2-f2f9-4d2c-adce-8c030ef74416.jpg)
​

Registro del manifest dentro de la aplicación:

![pwa-2.PNG](https://static.platzi.com/media/user_upload/pwa-2-c9a765c1-7833-4f39-99c0-2577018d300d.jpg)
​
Ahora puedes instalar Platzi Conf Store en tu computadora y aprovechar las ventajas de utilizar una PWA:

![pwa-3.png](https://static.platzi.com/media/user_upload/pwa-3-9afec04e-1cdd-41cd-851a-95b94d695f42.jpg)
​


Si quieres aprender más acerca de convertir tus aplicaciones de React en rápidas aplicaciones te recomiendo el curso C[urso de Progressive Web Apps con React.js](https://platzi.com/cursos/pwa-react-js/).