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