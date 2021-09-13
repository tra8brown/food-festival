const path = require("path");

//webpack 3 properties: entry, output & mode
module.exports = {
    entry: "./assets/js/script.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development'
};