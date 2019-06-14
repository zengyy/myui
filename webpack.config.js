const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: "./build.js",
    output: {
        filename: "myui.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.vue$/,
            use: ["vue-loader"]
        }]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};