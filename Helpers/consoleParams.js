/**
 * Помощник проверки параметров консоли
 */
let consoleParams = function () {
    /**
     * Проверка введён ли параметр в консоле
     * @param {string} argument - Парметры из консоли
     * @returns {boolean} Возвращает true если введён иначе false
     */
    this.checkConsoleParams = function (argument) {
        let index = process.argv.indexOf(argument);
        return (index === -1) ? true : false;
    }
};
module.exports = new consoleParams();

