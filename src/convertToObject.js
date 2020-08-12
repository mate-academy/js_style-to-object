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
  const arr = sourceString.split(';');

  const obj = {};

  arr.forEach(item => {
    const prop = item.trim().split(':');

    if (prop[0]) {
      obj[prop[0].trim()] = prop[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
