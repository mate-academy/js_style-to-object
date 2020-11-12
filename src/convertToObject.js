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
  const resultObject = {};
  const propArray = sourceString.split(';');

  propArray.forEach(function(prop) {
    const key = (prop.split(':')[0]);
    const value = (prop.split(':')[1]);

    if (key !== undefined && value !== undefined) {
      resultObject[key.trim()] = value.trim();
    }
  });

  return resultObject;
}

module.exports = convertToObject;
