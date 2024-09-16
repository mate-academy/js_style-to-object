'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const stylesObj = {};
  for (let i = 0; i < styles.length - 1; i++) {
    const currentStyles = styles[i].split(':');
    stylesObj[currentStyles[0].trim()] = currentStyles[1].trim();
  }
  return stylesObj;
}

module.exports = convertToObject;
