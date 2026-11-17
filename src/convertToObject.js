'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  /* Розділяю початковий CSS-рядок за ";".
  Отримую масив, де кожен елемент — окрема CSS-декларація. */
  const cssDeclarations = sourceString.split(';');
  const cssProperties = {};

  /* Перевіряю кожен CSS-рядок за допомогою trim().
    Якщо після видалення пробілів та символів перенесення
    рядок залишається порожнім, не додаю його до нового масиву.
    Таким чином отримую масив без порожніх елементів. */
  const cleanStrings = cssDeclarations.filter((item) => {
    return item.trim() !== '';
  });

  // Проходжу через кожну непорожню CSS-декларацію
  const keyValArrays = cleanStrings.map((cssDeclaration) => {
    /* Розділяю CSS-рядок за двокрапкою. Отримую масив із назвою
    властивості та її значенням.
    ['background-color', '      #fff'] */
    const propertyParts = cssDeclaration.split(':');

    /* знову захожу в кожен масив отриманий з спліт рядком вище
    і  видаляю зайві пробіли з ключа і значення за допомогою trim()
    ['background-color', '#fff'] */
    const trimmedKeyVal = propertyParts.map((part) => {
      return part.trim();
    });

    return trimmedKeyVal;
  });

  /* видаляю пусті масиви і отримую масив масивів */
  const validDeclarations = keyValArrays.filter((item) => {
    return item.every((el) => {
      return el !== '';
    });
  });

  validDeclarations.forEach((item) => {
    cssProperties[item[0]] = item[1];
  });

  return cssProperties;
}

module.exports = convertToObject;
