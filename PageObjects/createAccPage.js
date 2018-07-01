var createAccPage = function () {
    var dataJSON = require('../Fixtures/data');
    this.accountField = element(by.name('form.account.data.name'));
    this.checkBox = element(by.name('form.account.data.shareData'));
    this.nextButton = element(by.css('[data-ng-click="stepperCtrl.nextStep()"]'));
    this.editArea = element(by.css('.gtm-stepper-step-complete'));
    this.nameArea = element(by.css('div strong'));
    this.containerField = element(by.name('form.container.data.name'));
    this.createButton = element(by.css('[type="submit"]'));

    this.inputDataInContainer = function () {
        this.containerField.sendKeys(dataJSON.containerData);
    };

    this.inputName = function () {
        this.accountField.sendKeys(dataJSON.nameData);
    };

    this.checkContainerFieldFilled = function () {
        expect(accountField.getAttribute(dataJSON.containerTag)).toBe(dataJSON.containerAttribure);
    };

    this.selectCheckbox = function () {
        this.checkBox.click();
    };

    this.clickNextButtonOnPage = function () {
        this.nextButton.click();
    };

    this.clickOnEditArea = function () {
        this.editArea.click();
    };
};
module.exports = new createAccPage();