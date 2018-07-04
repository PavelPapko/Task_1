var createAccPage = function () {
    var dataJSON = require('../Fixtures/data'),
        EC = protractor.ExpectedConditions,
        accField = element(by.name('form.account.data.name')),
        checkBox = element(by.name('form.account.data.shareData')),
        nextBtn = element(by.css('[data-ng-click="stepperCtrl.nextStep()"]')),
        editArea = element(by.css('.gtm-stepper-step-complete')),
        nameArea = element(by.css('div strong')),
        containerField = element(by.name('form.container.data.name')),
        createBtn = element(by.css('[type="submit"]'));

    this.inputDataInContainer = function (data) {
        containerField.sendKeys(data);
    };

    this.inputName = function (name) {
        accField.sendKeys(name);
    };

    this.accFieldClear = function () {
        accField.clear();
    };

    this.waitAccField = function () {
        browser.wait(EC.visibilityOf(accField), 10000, dataJSON.timeoutMessage);
    };

    this.accFieldDisplayed = function () {
        return accField.isDisplayed();
    };

    this.checkContainerFieldFilled = function () {
        return accField.getAttribute(dataJSON.containerTag);
    };

    this.containerFieldDisplayed = function () {
        return containerField.isDisplayed();
    };

    this.checkBoxDisplayed = function () {
        return checkBox.isDisplayed();
    };

    this.selectCheckbox = function () {
        checkBox.click();
    };

    this.checkboxSelected = function () {
        return checkBox.isSelected();
    };

    this.clickNextBtnOnPage = function () {
        nextBtn.click();
    };

    this.nextBtnEnabled = function () {
        return nextBtn.isEnabled();
    };

    this.createBtnEnabled = function () {
        return createBtn.isEnabled();
    };

    this.clickOnEditArea = function () {
        editArea.click();
    };

    this.editAreaDisplayed = function () {
        return editArea.isDisplayed();
    };

    this.getTextFromNameArea = function () {
        return nameArea.getText();
    };
};
module.exports = new createAccPage();