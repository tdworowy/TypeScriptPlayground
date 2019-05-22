exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*.js'],
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters')
        jasmine.getEnv().addReporter(
            new jasmineReporters.TeamCityReporter()
        )
    }

}