var googleLoginPage = function () {
    var dataJSON = require('../Fixtures/data'),
        nextbtnEmail = element(by.id('identifierNext')),
        nextbtnPass = element(by.id('passwordNext'));
    this.emailField = element(by.name('identifier'));
    this.passField = element(by.name('password'));

    this.clickNextBtn = function () {
        nextbtnEmail.click();
    };

    this.clickNextBtn1 = function () {
        nextbtnPass.click();
    };

    this.inputEmail = function (params) {
        this.emailField.sendKeys(params);
    };

    this.inputPass = function () {
        this.passField.sendKeys(dataJSON.pass);
    }
};
module.exports = new googleLoginPage();