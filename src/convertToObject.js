'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceInArray = sourceString
    .split(';')
    .map(styles => styles.trim())
    .filter(styles => styles !== '')
    .map(styles => styles.split(':'));

  const stylesInObject = {};

  sourceInArray.map(([ property, value ]) => {
    stylesInObject[property.trim()] = value.trim();
  });

  return stylesInObject;
}

module.exports = convertToObject;
