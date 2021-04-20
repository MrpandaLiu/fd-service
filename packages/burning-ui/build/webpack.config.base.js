'use strict'
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['d.ts', '.ts', '.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [path.resolve(__dirname, 'node_modules')],
                options: {
                    transpileOnly: true,
                    configFile: path.resolve(__dirname, '../tsconfig.json'),
                    appendTsSuffixTo: ['/\.vue$/']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ]
    }
};