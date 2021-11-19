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
  return sourceString.split(';').reduce((acc, cur) => {
    const [key, value] = cur.split(':');

    if (/\S/.test(key) && /\S/.test(value)) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
