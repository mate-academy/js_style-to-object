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

  sourceString.split(';')
    .filter(x => x.trim().length > 0)
    .forEach(function(item) {
      const [property, value] = item.split(':');

      styles[property.trim()] = value.trim();
    });

  return styles;
}

module.exports = convertToObject;
