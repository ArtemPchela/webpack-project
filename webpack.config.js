const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


let mode = "development";
//file browserslistrc for autocomplete reload
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production"
    //file browserslist for autocomplete reload
    target = "browserslist"
}

module.exports = {
    mode: mode,
    //file browserslist for autocomplete reload
    target: target,

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },

    module: {
        rules: [
            //extension for different images format
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
                //type: "asset/resource" create folder with images
                //type: "asset/inline" put path directly in jsx, good to work with small size pictures
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    }
                }
            },
            //extension for different types of css extensions
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""}
                    },

                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })],

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
};