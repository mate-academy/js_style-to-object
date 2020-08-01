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
  let arr = [];

  arr = sourceString.split(';');

  const res = arr.reduce((obj, item) => {
    const spl = item.split(':');

    if (spl[1] !== undefined) {
      obj[spl[0].trim()] = spl[1].trim();

      return obj;
    }

    return obj;
  }, {});

  return res;
}

module.exports = convertToObject;
