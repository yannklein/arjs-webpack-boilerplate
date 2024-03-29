# ⑇ ARJS webpack v5 Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A static website boilerplate for ThreeJS + ARJS projects managed via Webpack5.

![IMG_0421](https://user-images.githubusercontent.com/26819547/109923135-af096580-7d01-11eb-9644-afc982c58fea.jpg)

## Demo

### Marker-based demo
Open this [live demo](https://yannklein.github.io/arjs-webpack-boilerplate) and show this [hiro marker](https://github.com/yannklein/arjs-webpack-boilerplate/raw/master/public/hiro.png) to the camera!

### NFT-based (image-based) demo
Open this [live demo](https://yannklein.github.io/arjs-webpack-boilerplate/?type_nft) and show this [pinball image](https://github.com/yannklein/arjs-webpack-boilerplate/blob/master/public/pinball.jpg) to the camera!

You can also checkout this [simulated-image version](https://yannklein.github.io/arjs-webpack-boilerplate/?mode=simulation&type=nft). (might need a page refresh, still a bug to fix there..)

## Build on the shoulders of giants
Thanks to [Tania Rascia](https://www.taniarascia.com). I reused her Webpack5 boilerplate as a base for this code.

Thanks to [ARJS team](https://github.com/AR-js-org/AR.js) for their amazing Web AR plugin.

Thanks to [ThreeJS team](https://threejs.org/) for bringing 3D magic on the web.

## Installation

Clone this repo and yarn install.

```bash
yarn install
```

## Usage

### Development server

```bash
yarn start
```
#### Marker-based version
You can view the development server at `localhost:8080` and use the [hiro marker](https://github.com/yannklein/arjs-webpack-boilerplate/raw/master/public/hiro.png).

Or you can access a marker simulation mode from `http://localhost:8080/?mode=simulation`.

#### NTF-based version ⚠️ down! work in progress..
You can view the development server at `localhost:8080/?type=nft` and use the [pinball image](https://github.com/yannklein/arjs-webpack-boilerplate/blob/master/public/pinball.jpg).

Or you can access a image simulation mode from `http://localhost:8080/?mode=simulation&type=nft`.

#### Test you app with ngrok
Keep the development server opened, open a new terminal tab.
Install [ngrok](https://ngrok.com/) and run:
```bash
ngrok http 8080 -host-header="localhost:8080"
```

### Production build

```bash
yarn build
```

### Deplot to Github pages

Run this command:

```bash
yarn deploy
```
And setup Github pages on your repo:
- Source: `gh-pages` branch
- Folder `root`.

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

## Dependencies

### ThreeJS and ARJS through external links
- [`three`](https://threejs.org/)
- [`ar`](https://ar-js-org.github.io/AR.js-Docs/)

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets

## Author 

- [Yann Klein](https://www.yannklein.me)


## License

This project is open source and available under the [MIT License](LICENSE).
