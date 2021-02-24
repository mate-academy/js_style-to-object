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

  sourceString.split(';').forEach(property => {
    const [key, value] = property.split(':');

    if (!!key && !!value) {
      styles[key.trim()] = value.trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
