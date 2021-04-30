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
  const properties = {};

  sourceString.split(';').map(prop =>
    prop.trim().split(':').filter(el =>
      el.length > 0)).filter(el => el.length > 0).forEach(pair => {
    if (pair.length > 0) {
      properties[pair[0].trim()] = pair[1].trim();
    }
  });

  return properties;
}

module.exports = convertToObject;
