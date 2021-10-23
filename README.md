# Simple Frontend Starter Pack

Easy starter pack for your simple frontend web projects. In this pack you have node-sass, bootstrap, postcss autoprefixer for css, parcel for bundling and compiling es6 to vanilla js.

> **Note:** This starter pack uses bash commands. If you are on windows you can use **Git Bash**.

## Installation

1. Clone the repository
2. Open your terminal and run ```$ npm install```
3. Install parcel as global dependecy ```$ npm install parcel -g```

## Folder Structure

```
app
└── dist
└── src
    └── css
    └── img
    └── sass
        └── main.scss
    └── index.html
    └── scripts.js
```

## Usage

Start developing by running this line on terminal;
```
$ npm start
```

Use ```src/sass``` folder for styling,
Use ```src/index.html``` file for marking,
Use ```src/scripts.js``` file for scripting.

And once you done build the project to ```dist``` folder by running this line on terminal;
```
$ npm run build
```


> **Note:** You can use multiple hmtl files as entry points. For that you need to make some changes on package.json file. Here are just changed lines. We just used ```*``` instead of ```index```. But note that you should use **localhost:1234/index.html** now.


```
"devserver": "npm run clean && parcel src/*.html",
```

```
"build": "npm run clean && npm run build:css && parcel build src/*.html --public-url ./"
```
