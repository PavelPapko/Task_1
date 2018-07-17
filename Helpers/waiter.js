/**
 * Помощник работы с ожиданиями
 */
let waiter = function() {
    let EC = protractor.ExpectedConditions;

    /**
     * Ожидание локатора
     * @param {elementFinder} field - Поле
     * @param {number} timeoutTime - Таймаут
     * @param {string} timeoutMessage - Сообщение о таймауте
     */
    this.waitLocator = function (field, timeoutTime, timeoutMessage) {
        browser.wait(EC.visibilityOf(field), timeoutTime, timeoutMessage);
    };
};
module.exports = new waiter();

