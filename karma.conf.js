module.exports = function(config) {
    config.set({
        basePath: '.',
        files: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
            'node_modules/jquery/dist/jquery.js',
            "Tests/jasmine/spec/dom_test.js",
            "Tests/jasmine/spec/async_tests.js",
            "Tests/jasmine/spec/exampleTest_spies.js",
            "Tests/jasmine/spec/exampleTest.js"
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]
    })
}