describe('google tagmanager create tests', function () {
    var googleLoginPage = require('../PageObjects/googleLoginPage'),
        createAccPage = require('../PageObjects/createAccPage'),
        dataJSON = require('../Fixtures/data'),
        EC = protractor.ExpectedConditions;

    beforeAll (function () {
        browser.waitForAngularEnabled(false);
    });

    it('open page', function () {
        browser.get(dataJSON.tagmanagerUrl);
        browser.wait(EC.visibilityOf(googleLoginPage.emailField), 5000, dataJSON.timeoutMessage)
            .then(() => googleLoginPage.inputEmail())
            .then(() => googleLoginPage.clickNextBtn());
        browser.wait(EC.visibilityOf(googleLoginPage.passField), 5000, dataJSON.timeoutMessage)
            .then(() => googleLoginPage.inputPass())
            .then(() => googleLoginPage.clickNextBtn1());
        browser.wait(EC.visibilityOf(createAccPage.accountField), 10000, dataJSON.timeoutMessage)
            .then(() => expect(browser.getCurrentUrl()).toBe(dataJSON.tagmanagerUrl));
    });

    it('check and input date in field', function () {
        expect(createAccPage.accountField.isDisplayed()).toBeTruthy()
            .then(() => createAccPage.inputName())
            .then(() => expect(createAccPage.accountField.getAttribute(dataJSON.containerTag)).toBe(dataJSON.containerAttribure));
    });

    it('selecting the checkbox and checking that a check is drawn', function () {
        expect(createAccPage.checkBox.isDisplayed()).toBeTruthy()
            .then(() => createAccPage.selectCheckbox())
            .then(() => expect(createAccPage.checkBox.isSelected()).toBe(false));
    });

    it('check next btn and click on next btn', function () {
        expect(createAccPage.nextButton.isEnabled()).toBe(true)
            .then(() => createAccPage.clickNextButtonOnPage())
            .then(() => expect(createAccPage.containerField.isDisplayed()).toBeTruthy());
    });

    it('enter text in the container field, check that the text is entered', function () {
        expect(createAccPage.containerField.isDisplayed()).toBeTruthy()
            .then(() => createAccPage.inputDataInContainer())
            .then(() => expect(createAccPage.containerField.getAttribute(dataJSON.containerTag)).toBe(dataJSON.containerAttribure));
    });

    it('check create button', function () {
        expect(createAccPage.createButton.isEnabled()).toBe(false);
    });

    it('edit name field and check entered', function () {
        expect(createAccPage.editArea.isDisplayed()).toBeTruthy()
            .then(() => createAccPage.clickOnEditArea())
            .then(() => createAccPage.accountField.clear())
            .then(() => createAccPage.accountField.sendKeys(dataJSON.newNameData))
            .then(() => createAccPage.clickNextButtonOnPage())
            .then(() => expect(createAccPage.nameArea.getText()).toBe(dataJSON.newNameData));
    });
});