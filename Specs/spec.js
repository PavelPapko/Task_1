describe('Google tagmanager create tests', function () {
    let googleLoginPage = require('../PageObjects/googleLoginPage'),
        createAccPage = require('../PageObjects/createAccPage'),
        dataJSON = require('../Fixtures/data'),
        utilsJS = require('../Helpers/utilsJS'),
        emailBrowserParam = browser.params.login.email,
        passBrowserParam = browser.params.login.pass;

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
    });

    it('Open page', function () {
        let emailParam = utilsJS.isExistsParam(emailBrowserParam) ? utilsJS.getConsoleParam(emailBrowserParam) : emailBrowserParam;
        let passParam = utilsJS.isExistsParam(passBrowserParam) ? utilsJS.getConsoleParam(passBrowserParam) : passBrowserParam;
        browser.get(dataJSON.tagmanagerUrl)
            .then(() => utilsJS.waitLocator(googleLoginPage.getEmailField(), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => googleLoginPage.inputEmail(emailParam))
            .then(() => googleLoginPage.clickNextBtnEmail())
            .then(() => utilsJS.waitLocator(googleLoginPage.getPassField(), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => googleLoginPage.inputPass(passParam))
            .then(() => googleLoginPage.clickNextBtnPass())
            .then(() => utilsJS.waitLocator(createAccPage.getAccField(), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => expect(browser.getCurrentUrl()).toBe(dataJSON.tagmanagerUrl));
    });

    it('Check and input date in field', function () {
        expect(createAccPage.accFieldDisplayed()).toBeTruthy()
            .then(() => createAccPage.inputName(dataJSON.nameData))
            .then(() => expect(createAccPage.checkContainerFieldFilled()).toBe('false'));
    });

    it('Selecting the checkbox and checking that a check is drawn', function () {
        expect(createAccPage.checkBoxDisplayed()).toBeTruthy()
            .then(() => createAccPage.selectCheckbox())
            .then(() => expect(createAccPage.checkboxSelected()).toBe(false));
    });

    it('Check next btn and click on next btn', function () {
        expect(createAccPage.nextBtnEnabled()).toBe(true)
            .then(() => createAccPage.clickNextBtnOnPage())
            .then(() => expect(createAccPage.containerFieldDisplayed()).toBeTruthy());
    });

    it('Enter text in the container field, check that text is entered', function () {
        expect(createAccPage.containerFieldDisplayed()).toBeTruthy()
            .then(() => createAccPage.inputDataInContainer(dataJSON.containerData))
            .then(() => expect(createAccPage.checkContainerFieldFilled()));
    });

    it('Check create button', function () {
        expect(createAccPage.createBtnEnabled()).toBe(false);
    });

    it('Edit name field and check entered', function () {
        expect(createAccPage.editAreaDisplayed()).toBeTruthy()
            .then(() => createAccPage.clickOnEditArea())
            .then(() => createAccPage.accFieldClear())
            .then(() => createAccPage.inputName(dataJSON.newNameData))
            .then(() => createAccPage.clickNextBtnOnPage())
            .then(() => expect(createAccPage.getTextFromNameArea()).toBe(dataJSON.newNameData));
    });
});