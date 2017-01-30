var webpack = require('webpack')
const webpackConfig = {
    entry: './test/main.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
        publicPatch: __dirname + '/assets/'
    },
    devtool: 'source-map',
    devServer:{
        inline: true,
        hot: true,
        progress: true,
        colors: true, //终端输出结果为彩色
        historyApiFallback: false  //不跳转
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
        ],
        preLoaders: [
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
}

module.exports =  webpackConfig
