const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './Index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader", options: { importLoaders: 1 } },
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: "postcss",
                                plugins: loader => [require('autoprefixer')]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}  
                  }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title: 'App',
            template: 'Index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })   
    ],
    
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    }
}