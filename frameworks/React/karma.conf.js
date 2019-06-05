const path = require('path');
module.exports = function(config) {
    config.set({
        basePath: '.',
        jspm: {
          loadFiles: [
            path.resolve(__dirname+ '/dist/test.js')
          ]
        },
      
        autoWatch: false,
        singleRun: true,
        logLevel: config.LOG_DEBUG,
        frameworks: ['mocha', 'jspm'],
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-webpack-preprocessor',
            'karma-sourcemap-loader',
            'karma-jspm'
        ]
    })
}