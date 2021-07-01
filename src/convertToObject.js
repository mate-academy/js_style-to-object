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
    if (cssRulesList[i].includes(':')) {
      cssRulesList[i] = cssRulesList[i].split(':');
    } else {
      cssRulesList.splice(i, 1);
      i--;
      continue;
    }

    for (let q = 0; q < cssRulesList[i].length; q++) {
      cssRulesList[i][q] = cssRulesList[i][q].trim();
    }
  }

  const styles = cssRulesList.reduce((prev, rule) => {
    return {
      ...prev,
      [rule[0]]: rule[1],
    };
  }, {});

  return styles;
}

module.exports = convertToObject;
