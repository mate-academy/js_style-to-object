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
  const styles = {};

  const stylesInArr = sourceString.replace(/\r|\r?\n/g, '').split(';');

  stylesInArr.map(item => {
    const key = item.split(':');

    if (key[1] !== undefined) {
      styles[key[0].trim()] = key[1].trim();
    }
  });

  return styles;
}
module.exports = convertToObject;
