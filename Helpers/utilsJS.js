/**
 * Помощник соджержащий вспомогательные методы
 */
let consoleParams = function () {
    let EC = protractor.ExpectedConditions;
    /**
     * Проверка введён ли параметр в консоле
     * @param {string} argument - Вводимый парметр
     * @returns {boolean} Возвращает true если введён иначе false
     */
    this.isExistsParam = function (argument) {
        return process.argv.includes(argument);
    };

    /**
     * Метод возвращающий параметр из консоли
     * @param {string} paramName - Параметр из консоли
     * @returns {*} Возвращает параметр из консоли
     */
    this.getConsoleParam = function (paramName) {
        let index = process.argv.indexOf(paramName);
        return process.argv[index];
    };

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
module.exports = new consoleParams();

