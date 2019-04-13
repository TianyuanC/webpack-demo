const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
    devServer: {
        port: 1234
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.ryan$/,
                use: [
                    {
                        loader: path.resolve("./loader/ryan.js")
                    }
                ]
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({ analyzerPort: 1235, openAnalyzer: false }),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};
