const webpack = require('webpack');
const path = require('path');
const { devMiddleware } = require('./serve.config');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    // devtool: 'source-map',
    // entry: {
    //     app: './src/index.js',
    // },
    // output: {
    //     globalObject: 'self',
    //     path: path.resolve(__dirname, 'dist'),
    //     publicPath: devMiddleware.publicPath,
    //     filename: '[name].bundle.js',
    // },
    module: {
        rules: [
            {   
                // Load babel loader. To understand js in all browsers
                test: /\.(js|jsx)$/,
                exclude: /node_modules|vendor/,
                use: {
                    loader: "babel-loader",
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
                test: /\.(scss|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.worker\.js$/,
                exclude: /node_modules/,
                use: {
                loader: 'worker-loader',
                options: {
                    name: '[name].[hash].js',
                },
                },
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
        }),
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
        // Ignore require() calls in vs/language/typescript/lib/typescriptServices.js
        new webpack.IgnorePlugin(
        /^((fs)|(path)|(os)|(crypto)|(source-map-support))$/,
        /vs(\/|\\)language(\/|\\)typescript(\/|\\)lib/
        ),
        new webpack.ContextReplacementPlugin(
          /monaco-editor(\\|\/)esm(\\|\/)vs(\\|\/)editor(\\|\/)common(\\|\/)services/
        ),
        new MonacoWebpackPlugin(),
    ].concat(
        [new webpack.NamedModulesPlugin(), new webpack.NoEmitOnErrorsPlugin()]
    )
}

