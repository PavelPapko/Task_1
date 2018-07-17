/**
 * Page object страницы авторизации google.
 */
let googleLoginPage = function () {
    let nextbtnEmail = element(by.id('identifierNext')),
        nextbtnPass = element(by.id('passwordNext')),
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
        nextbtnPass.click();
    };

    /**
     * Ввод емейла
     * @param {boolean} email - Значение по которому выбирается логин (default / custom)
     * @returns {ActionSequence | promise.Promise<void> | webdriver.promise.Promise.<void>}
     */
    this.inputEmail = function (email) {
        return (email == false) ? emailField.sendKeys(browser.params.login.email): emailField.sendKeys(browser.params.login.email);
    };

    /**
     * Метод возвращающий локатор поля "Телефон или адрес эл. почты"
     * @returns {*} Локатор поля емейла
     */
    this.emailField = function () {
        return emailField;
    };

    /**
     * Метод возвращающий локатор поля пароля
     * @returns {*} Локатор поля пароля
     */
    this.passField = function () {
        return passField;
    };

    /**
     * Ввод пароля
     * @param {boolean} pass - Значение по которому выбирается пароль (default / custom)
     * @returns {ActionSequence | promise.Promise<void> | webdriver.promise.Promise.<void>} Возвращает результат выполнения промиса
     */
    this.inputPass = function (pass) {
        return (pass == false) ? passField.sendKeys(browser.params.login.pass): passField.sendKeys(browser.params.login.pass);
    };
};
module.exports = new googleLoginPage();