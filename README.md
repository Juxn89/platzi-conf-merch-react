# Platzi Conf Merch | React
## Dependencies
### React
- React and React-DOM: ```npm i react react-dom```.
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