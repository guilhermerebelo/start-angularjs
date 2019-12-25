var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // entry: './test/app/app.js',
    entry: './app/main/app.js',
    output: {
        filename: 'starter.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/content/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin({
            filename: 'starter.css',
            allChunks: true
        })
    ],
    externals: {
        angular: 'angular',
        moment: 'moment'
    },
    devtool: '#source-map',
    devServer: {
        contentBase: './test/content',
        stats: 'minimal',
        open: true
    }
};
