# Example App

The following steps were used to set up this example app
https://jerrayl.github.io/example-app/

## Create Vite React app with ts

In the terminal, run

    npm create vite@latest

Give the app a name, and then
Use the arrow keys to select
- react

- typescript

cd into the app folder

## Install Tailwind

In the terminal, run

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

Then, add 
add `"./src/**/*.{html,tsx}"` to tailwind.config.js

and add 

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

to index.css

## Install MobX
In the terminal, run

    npm install --save mobx
    npm install --save mobx-react

## Run app
To run the app, in the terminal 

    npm run dev
    
## Deploy app
To deploy the app, in the terminal run
    `npm install gh-pages --save-dev`

And add 
`"homepage": "https://[git name].github.io/[app name]"`
and
 `"predeploy": "npm run build",
"deploy": "gh-pages -d dist"`
to the scripts in package.json

then add 
`base: "/[app name]/"`
to vite.config.ts
