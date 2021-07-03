const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";

//for browserslistrc for autocomplete reload
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production"
    target = "browserslist"
}

module.exports = {
    mode: mode,
    target: target,

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
};