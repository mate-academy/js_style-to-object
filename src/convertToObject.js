'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssRulesList = sourceString.split(';');

  for (let i = 0; i < cssRulesList.length; i++) {
    // якщо у рядку є ":" значить цей рядок містить css правило
    if (cssRulesList[i].includes(':')) {
      // розбиває css правило на [властивість][значення]
      cssRulesList[i] = cssRulesList[i].split(':');
    } else {
      // видаляє елемент масиву, який не є css правилом
      cssRulesList.splice(i, 1);
      i--;
      continue;
    }

    // trim() для [властивість] та [значення]
    for (let q = 0; q < cssRulesList[i].length; q++) {
      cssRulesList[i][q] = cssRulesList[i][q].trim();
    }
  }

  // записує css правила в новому форматі
  const styles = cssRulesList.reduce((prev, rule) => {
    return {
      ...prev,
      [rule[0]]: rule[1],
    };
  }, {});

  return styles;
}

module.exports = convertToObject;
