module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'temp-new-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};