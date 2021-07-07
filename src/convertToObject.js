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
  const resultObj = {};
  const sourceStringArr = sourceString.split(';');

  sourceStringArr.forEach(property => {
    const [key, value] = property.split(':');

    if (value !== undefined) {
      resultObj[key.trim()] = value.trim();
    }
  });

  return resultObj;
}

module.exports = convertToObject;
