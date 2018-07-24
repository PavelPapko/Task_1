exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',

    specs: ['./Specs/spec.js'],

    capabilities: {
        browserName: 'chrome'
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
    },

    params: {
        login: {
            email: 'thelapstrrr@gmail.com',
            pass: 'diplom5kurs'
        }
    }
};