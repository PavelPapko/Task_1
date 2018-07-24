/**
 * Page object страницы google tagmanager.
 */
let createAccPage = function () {
    let accField = element(by.name('form.account.data.name')),
        checkBox = element(by.name('form.account.data.shareData')),
        nextBtn = element(by.css('[data-ng-click="stepperCtrl.nextStep()"]')),
        editArea = element(by.css('.gtm-stepper-step-complete')),
        nameArea = element(by.css('div strong')),
        containerField = element(by.name('form.container.data.name')),
        createBtn = element(by.css('[type="submit"]')),
        containerTag = "aria-invalid";

    /**
     * Ввод данных в поле "Название контейнера"
     * @param {string} data - Данные
     */
    this.inputDataInContainer = function (data) {
        containerField.sendKeys(data);
    };

    /**
     * Ввод названия аккаунта
     * @param {string} name - Имя
     */
    this.inputName = function (name) {
        accField.sendKeys(name);
    };

    /**
     * Отчистка поля "Названия аккаунта"
     */
    this.accFieldClear = function () {
        accField.clear();
    };

    /**
     * Метод возвращающий локатор поля "Названия аккаунта"
     * @returns {*} Локатор поля "Названия аккаунта"
     */
    this.getAccField = function () {
        return accField;
    };

    /**
     * Проверка отображения поля "Названия аккаунта"
     * @returns {webdriver.promise.Promise.<boolean>|promise.Promise<boolean>} Результат выполнения промиса
     */
    this.accFieldDisplayed = function () {
        return accField.isDisplayed();
    };

    /**
     * Проверка что поле "Название контейнера" заполен
     * @returns {string|promise.Promise<string>|webdriver.promise.Promise.<string>} Результат выполнения промиса
     */
    this.checkContainerFieldFilled = function () {
        return accField.getAttribute(containerTag);
    };

    /**
     * Проверка отображения поля "Название контейнера"
     * @returns {webdriver.promise.Promise.<boolean>|promise.Promise<boolean>} Результат выполнения промиса
     */
    this.containerFieldDisplayed = function () {
        return containerField.isDisplayed();
    };

    /**
     * Проверка отображения чекбокса
     * @returns {webdriver.promise.Promise.<boolean>|promise.Promise<boolean>} Результат выполнения промиса
     */
    this.checkBoxDisplayed = function () {
        return checkBox.isDisplayed();
    };

    /**
     * Клик чекбокса
     */
    this.selectCheckbox = function () {
        checkBox.click();
    };

    /**
     * Проверка, что чекбокс нажат
     * @returns {webdriver.promise.Promise.<boolean>|promise.Promise<boolean>} Возвращает результат выполнения промиса
     */
    this.checkboxSelected = function () {
        return checkBox.isSelected();
    };

    /**
     * Нажатие на кнопку "Далее"
     */
    this.clickNextBtnOnPage = function () {
        nextBtn.click();
    };

    /**
     * Проверка, что кнопка "Далее" активна
     * @returns {webdriver.promise.Promise.<boolean>|promise.Promise<boolean>} Результат выполнения промиса
     */
    this.nextBtnEnabled = function () {
        return nextBtn.isEnabled();
    };

    /**
     * Проверка что кнопка "Создать" активна
     * @returns {webdriver.promise.Promise.<boolean>|promise.Promise<boolean>} Результат выполнения промиса
     */
    this.createBtnEnabled = function () {
        return createBtn.isEnabled();
    };

    /**
     * Нажатие на область "Настройка аккаунта"
     */
    this.clickOnEditArea = function () {
        editArea.click();
    };

    /**
     * Проверка, что область "Настройка аккаунта" отображается
     * @returns {webdriver.promise.Promise.<boolean>|promise.Promise<boolean>} Результат выполнения промиса
     */
    this.editAreaDisplayed = function () {
        return editArea.isDisplayed();
    };

    /**
     * Проверка введённого теста в поле "Название аккаунта"
     * @returns {webdriver.promise.Promise.<string>|promise.Promise<string>} Результат выполнения промиса
     */
    this.getTextFromNameArea = function () {
        return nameArea.getText();
    };
};
module.exports = new createAccPage();