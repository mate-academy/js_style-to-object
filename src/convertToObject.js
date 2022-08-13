'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(/[;:]+/);

  const arrayString = stylesArray.map((element) => {
    return element.replace(/\s+/g, ' ').trim();
  });

  const filteredArray = arrayString.filter((element) => {
    return element !== '';
  });

  const styles = {};

  for (let i = 0; i < filteredArray.length - 1; i += 2) {
    styles[filteredArray[i]] = filteredArray[i + 1];
  }

  return styles;
}

module.exports = convertToObject;
