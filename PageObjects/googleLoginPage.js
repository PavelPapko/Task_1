var googleLoginPage = function () {
    var dataJSON = require('../Fixtures/data'),
        EC = protractor.ExpectedConditions,
        nextbtnEmail = element(by.id('identifierNext')),
        nextbtnPass = element(by.id('passwordNext')),
        emailField = element(by.name('identifier')),
        passField = element(by.name('password'));

    this.clickNextBtnEmail = function () {
        nextbtnEmail.click();
    };

    this.clickNextBtnPass = function () {
        nextbtnPass.click();
    };

    this.inputEmail = function (email) {
        emailField.sendKeys(email);
    };

    this.waitEmailField = function () {
        browser.wait(EC.visibilityOf(emailField), 10000, dataJSON.timeoutMessage);
    };

    this.inputPass = function (pass) {
        passField.sendKeys(pass);
    };

    this.waitPassField = function () {
        browser.wait(EC.visibilityOf(passField), 10000, dataJSON.timeoutMessage);
    };
};
module.exports = new googleLoginPage();