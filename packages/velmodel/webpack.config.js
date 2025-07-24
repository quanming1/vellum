const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'UtilsPackage',
        libraryTarget: 'umd',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        // 如果有外部依赖可以在这里配置
    }
}; 