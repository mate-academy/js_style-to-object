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

  sourceString
    .split(';')
    .map(item => {
      const itemTrim = item.trim();

      if (itemTrim !== '') {
        const [key, value] = itemTrim.split(':');

        obj[key.trim()] = value.trim();
      }
    });

  return obj;
}

module.exports = convertToObject;
