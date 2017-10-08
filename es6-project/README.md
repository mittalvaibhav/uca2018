Create any sample project with index.html, main.js and styles
Goto project directory and run
 - npm init
 - press enter till end
 - npm install babel-cli babel-core --save-dev
 - npm install babel-preset-es2015 --save-dev
 
Open package .json and add:
 - "build": "babel ./js/* -d ES6" to scripts

Create .babelrc and add contents as:
 
{
    "presets": ["es2015"]
}

Run npm run build

