const webpack = require("webpack")
const path = require("path");

//webpack 3 properties: entry, output & mode
module.exports = {
    entry: "./assets/js/script.js",
    output: {
        path: path.join(__dirname + "/dist"),
        filename: "main.bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    mode: "development"
};