# Steps

* Create project: ```npm init -y```

* Install ```webpack``` and ```webpack-cli```

* create ```'build'``` command that just runs ```'webpack'```.

* if we run ```npm run build``` the program will fail.

* we first neeed to create a ```src/``` folder with an ```index.js``` empty file inside. But a warning is given because we dont have a webpack configuration file.

* Create the file ```bro.js``` that returns a message in the console. Then import it in ```index.js```.

* create an ```index.html``` with basic stuff inside.

* Just for testing add the ```index.js``` script to the html file. Cd ```src/``` and type ```http-server -o```, we will see errors related to not understanding the code.

* Now we are going to create the ```webpack.cofig.js``` file. But before that install ```html-webpack-plugin``` and ```html-loader``` in dev mode.

* Fill the webpack with the following code:

    ``` js
    const HtmlWebPackPlugin = require("html-webpack-plugin");

    module.exports = {
        module: {
            rules: [
                {
                    // Find all the html and minimize them
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: { minimize: true }
                        }
                    ]
                }
            ]
        },
        plugins: [
            // The first plugin we load is for webpack to copy to dist the html file
            new HtmlWebPackPlugin({
                template:"./src/index.html",
                filename: "./index.html"
            })
        ]
    }
    ```

    Now the html should have been copied to the ```dist/``` folder.

* Install the ```webpack-dev-server``` in dev mode.

* Modify the ```package.json```  adding a ```'start:dev'``` command with ```'webpack-dev-server'``` and run it. In case we have an error with favicon add something like this to the ```<head>``` tag:

    ``` html
    <link rel="icon"
        type="image/png"
        href="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400 new-google-favicon-512.png"
    >
    ```

* In order to run ```Babel``` we have to type ```npm i -D @babel/core babel-loader @babel/preset-env``` and add a new rule to the ```webpack-config.js``` file as follows

    ```js
    {   // Load babel loader. To understand js in all browsers
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    },
    ```

* Now, what happens if we want to load an image? add it to ```src/images/my_image```. Add an ```<img src="*">``` tag into the html file and we will se an error if we want to run npm run build. In order to solve this issue we have to instal ```file-loader``` in dev mode and obvs add a new rule to the ```webpack.config.js```.

    ```js
    {   // Load file loader. To understand all image files
        test: /\.(png|svg|jpg|gif)$/,
        use: {
            loader: "file-loader"
        }
    },
    ```

    Run ```npm run start:dev``` and we should see  the image rendered and appear into the dist/folder.

* In order to run ```SASS``` files we have to install the following packages: ```node-sass style-loader css-loader sass-loader mini-css-extract-plugin``` in dev mode. Then create a ```styles/main.scss``` file and set the body background color to blue as follows:

    ```scss
    // Define a variable as blue
    $bg: blue;

    // change the background color of the body
    body {
        background: $bg;
    }
    ```

* Instead of adding this file to the ```index.html``` we import it in the ```index.js``` the following line ```import './styles/main.scss'```.
But first we have to add a rule and a plugin to make it work. The plugin is:

    ```js
    // This plugin will make sure css and sass files are included in the production build
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFileName: "[id].css"
    })
    ```

    whereas the new rule is:

    ```js
    {   // Load packages to scss files
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
    }
    ```

* In order for React to work on webpack, ```babel-loader``` rule must be changed to:

    ```js
    {   // Load babel loader. To understand js in all browsers
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
    }
    ```

    check previously that ```@babel/preset-react``` is installed.