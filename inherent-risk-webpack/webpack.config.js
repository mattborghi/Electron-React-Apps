const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    module: {
        rules: [
            {   
                // Load babel loader. To understand js in all browsers
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                // Find all the html and minimize them
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
             {   
                // Load file loader. To understand all image files
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "file-loader"
                }
            },
            {
                // Load packages to scss files
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        // The first plugin we load is for webpack to copy to dist the html file
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename: "./index.html"
        }),
        // This plugin will make sure css and sass files are included in the production build
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFileName: "[id].css"
        }),
    ]
}

