const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/build', filename: 'bundle.js'
    },
    devServer: {
        compress: true,
        port: 9000,
        quiet: true,
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                }
            ]
        }]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new FriendlyErrorsWebpackPlugin(),
        new ErrorOverlayPlugin()    
    ]
}