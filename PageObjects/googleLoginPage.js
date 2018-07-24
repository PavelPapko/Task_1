/**
 * Page object страницы авторизации google.
 */
let googleLoginPage = function () {
    let nextbtnEmail = element(by.id('identifierNext')),
        nextBtnPass = element(by.id('passwordNext')),
        emailField = element(by.name('identifier')),
        passField = element(by.name('password'));

    /**
     * Нажатие кнопки "Далее" на странице ввода емейла
     */
    this.clickNextBtnEmail = function () {
        nextbtnEmail.click();
    };

    /**
     * Нажатие кнопки "Далее" на странице ввода пароля
     */
    this.clickNextBtnPass = function () {
        nextBtnPass.click();
    };

    /**
     * Ввод емейла
     * @param {boolean} email - Значение по которому выбирается логин (default / custom)
     * @returns {ActionSequence | promise.Promise<void> | webdriver.promise.Promise.<void>} Результат выполнения промиса
     */
    this.inputEmail = function (email) {
        emailField.sendKeys(email);
    };

    /**
     * Метод возвращающий локатор поля "Телефон или адрес эл. почты"
     * @returns {*} Локатор поля емейла
     */
    this.getEmailField = function () {
        return emailField;
    };

    /**
     * Метод возвращающий локатор поля пароля
     * @returns {*} Локатор поля пароля
     */
    this.getPassField = function () {
        return passField;
    };

    /**
     * Ввод пароля
     * @param {boolean} pass - Значение по которому выбирается пароль (default / custom)
     * @returns {ActionSequence | promise.Promise<void> | webdriver.promise.Promise.<void>} Результат выполнения промиса
     */
    this.inputPass = function (pass) {
        passField.sendKeys(pass)
    };
};
module.exports = new googleLoginPage();