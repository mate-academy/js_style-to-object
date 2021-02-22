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

  sourceString.split(';').map(item => {
    const declaration = item.replace(/[\n]/g, '').split(':');

    if (!!declaration[0] && !!declaration[1]) {
      styles[declaration[0].trim()] = declaration[1].trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
