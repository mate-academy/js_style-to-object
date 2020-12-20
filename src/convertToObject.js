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
  const obj = {};
  const arr = sourceString.replace(/\r?\n|\r/g, '').split(';');

  arr.map(item => {
    const property = item.split(`:`);

    if (property[1] !== undefined) {
      obj[property[0].trim()] = property[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
