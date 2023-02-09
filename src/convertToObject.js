'use strict';

/**
 * Implement convertToObject function:
 *
 *Функция принимает строку со стилями (см. Пример в [stylesstring.js]
  (./ stylesstring.js)))
 * и возвращает объект, где свойства CSS являются ключами
 * и значения являются значениями связанных свойств CSS
 * (see an exampl in [test file]
 * (./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrSource = sourceString.split(';')
    .map(elem => elem.split(':').map(item => item.trim()));
  const result = {};

  arrSource.forEach(elem => {
    if (elem[0]) {
      result[elem[0]] = elem[1];
    }
  });

  return result;
}

module.exports = convertToObject;
