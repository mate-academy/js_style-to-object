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
  const desiredArray = sourceString.split(';');
  const styles = {};

  desiredArray.forEach((item) => {
    const property = item.split(':');

    if (property[1] !== undefined) {
      styles[property[0].trim()] = property[1].trim();
    };
  });

  return styles;
}

module.exports = convertToObject;
