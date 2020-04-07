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
  const result = {};
  const arr = sourceString.split(';');

  arr.forEach(elem => {
    const prop = elem.split(':');

    if (prop[1]) {
      result[prop[0].trim()] = prop[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
