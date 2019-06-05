var webpack = require('webpack');
module.exports = function(config) {
    config.set({
        basePath: '.',
        files: [
            "dist/test.js"
            
        ],
        preprocessors: {
            ["dist/test.js"]: ['webpack'],
          },
       
          webpackPreprocessor: {
            configPath: 'webpack.config_tests.js'
          },
        autoWatch: false,
        singleRun: true,
        logLevel: config.LOG_DEBUG,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-webpack-preprocessor'
        ]
    })
}