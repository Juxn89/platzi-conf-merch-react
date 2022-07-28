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