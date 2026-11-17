'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  /* Розділяю початковий CSS-рядок за ";".
  Отримую масив, де кожен елемент — окрема CSS-декларація. */
  const arrString = sourceString.split(';');
  const object = {};

  /* Перевіряю кожен CSS-рядок за допомогою trim().
    Якщо після видалення пробілів та символів перенесення
    рядок залишається порожнім, не додаю його до нового масиву.
    Таким чином отримую масив без порожніх елементів. */
  const cleanStrings = arrString.filter((item) => {
    return item.trim() !== '';
  });

  // Проходжу через кожну непорожню CSS-декларацію
  const keyValArrays = cleanStrings.map((cssDeclaration) => {
    /* Розділяю CSS-рядок за двокрапкою. Отримую масив із назвою
    властивості та її значенням.
    ['background-color', '      #fff'] */
    const keyValArr = cssDeclaration.split(':');

    /* знову захожу в кожен масив отриманий з спліт рядком вище
    і  видаляю зайві пробіли з ключа і значення за допомогою trim()
    ['background-color', '#fff'] */
    const trimmedKeyVal = keyValArr.map((part) => {
      return part.trim();
    });

    return trimmedKeyVal;
  });

  /* видаляю пусті масиви і отримую масив масивів */
  const getClearArr = keyValArrays.filter((item) => {
    return item.every((el) => {
      return el !== '';
    });
  });

  getClearArr.forEach((item) => {
    object[item[0]] = item[1];
  });

  return object;
}

module.exports = convertToObject;
