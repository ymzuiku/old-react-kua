var Webpack = require('webpack')
var qrcode = require('qrcode-terminal');
var internalIp = require('internal-ip');
var ip = internalIp.v4();
var port = 7000;
var webUrl = 'http://' + ip + ':' + port;

qrcode.generate(webUrl, {small: true});
console.log('Web: open ' + webUrl + ' in browser.\n');

const webpackConfig = {
    entry: './test/main.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
        publicPatch: __dirname + '/public/'
    },
    devtool: 'source-map',
    devServer:{
        host:'0.0.0.0',
        port:port,
        inline: true,
        hot: true,
        progress: true,
        quiet: true,  //屏蔽webpack-dev-server的打印
        colors: true, //终端输出结果为彩色
        historyApiFallback: false,  //不跳转
        quire: true
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
