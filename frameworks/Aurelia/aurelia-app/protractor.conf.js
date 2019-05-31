exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['test/e2e/dist/*.js'],
    plugins: [{
        path: './node_modules/aurelia-tools/plugins/protractor.js'
    }],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
}