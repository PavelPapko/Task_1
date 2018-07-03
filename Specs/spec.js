describe('google tagmanager create tests', function () {
    var googleLoginPage = require('../PageObjects/googleLoginPage'),
        createAccPage = require('../PageObjects/createAccPage'),
        dataJSON = require('../Fixtures/data'),
        EC = protractor.ExpectedConditions;

    beforeAll (function () {
        browser.waitForAngularEnabled(false);
    });

    it('open page', function () {
        browser.get(dataJSON.tagmanagerUrl)
            .then(() => googleLoginPage.waitEmailField())
            .then(() => googleLoginPage.inputEmail(dataJSON.email))
            .then(() => googleLoginPage.clickNextBtn())
            .then(() => googleLoginPage.waitPassField())
            .then(() => googleLoginPage.inputPass(dataJSON.pass))
            .then(() => googleLoginPage.clickNextBtn1())
            .then(() => createAccPage.waitAccField())
            .then(() => expect(browser.getCurrentUrl()).toBe(dataJSON.tagmanagerUrl));
    });

    it('check and input date in field', function () {
        expect(createAccPage.accFieldDisplayed()).toBeTruthy()
            .then(() => createAccPage.inputName(dataJSON.nameData))
            .then(() => expect(createAccPage.checkContainerFieldFilled()).toBe(dataJSON.containerAttribure));
    });

    it('selecting the checkbox and checking that a check is drawn', function () {
        expect(createAccPage.checkBoxDisplayed()).toBeTruthy()
            .then(() => createAccPage.selectCheckbox())
            .then(() => expect(createAccPage.checkboxSelected()).toBe(false));
    });

    it('check next btn and click on next btn', function () {
        expect(createAccPage.nextButtonEnabled()).toBe(true)
            .then(() => createAccPage.clickNextButtonOnPage())
            .then(() => expect(createAccPage.containerFieldDisplayed()).toBeTruthy());
    });

    it('enter text in the container field, check that the text is entered', function () {
        expect(createAccPage.containerFieldDisplayed()).toBeTruthy()
            .then(() => createAccPage.inputDataInContainer(dataJSON.containerData))
            .then(() => expect(createAccPage.checkContainerFieldFilled()));
    });

    it('check create button', function () {
        expect(createAccPage.createBtnEnabled()).toBe(false);
    });

    it('edit name field and check entered', function () {
        expect(createAccPage.editAreaDisplayed()).toBeTruthy()
            .then(() => createAccPage.clickOnEditArea())
            .then(() => createAccPage.accFieldClear())
            .then(() => createAccPage.inputNewName(dataJSON.newNameData))
            .then(() => createAccPage.clickNextButtonOnPage())
            .then(() => expect(createAccPage.getTextFromNameArea()).toBe(dataJSON.newNameData));
    });
});