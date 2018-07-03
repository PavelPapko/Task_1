var googleLoginPage = function () {
    var dataJSON = require('../Fixtures/data'),
        EC = protractor.ExpectedConditions,
        nextbtnEmail = element(by.id('identifierNext')),
        nextbtnPass = element(by.id('passwordNext')),
        emailField = element(by.name('identifier')),
        passField = element(by.name('password'));

    this.clickNextBtn = function () {
        nextbtnEmail.click();
    };

    this.clickNextBtn1 = function () {
        nextbtnPass.click();
    };

    this.inputEmail = function (params) {
        emailField.sendKeys(params);
    };

    this.waitEmailField = function () {
        browser.wait(EC.visibilityOf(emailField), 10000, dataJSON.timeoutMessage);
    };

    this.inputPass = function (params) {
        passField.sendKeys(params);
    };

    this.waitPassField = function () {
        browser.wait(EC.visibilityOf(passField), 10000, dataJSON.timeoutMessage);
    };
};
module.exports = new googleLoginPage();