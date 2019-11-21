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
  const normalized = sourceString.split(';').map(item => {
    if ((item.trim()).length > 0) {
      const [key, value] = item.split(':');
      return [key.trim(), value.trim()];
    } else {
      return 0;
    }
  });
  return normalized
    .filter(item => item !== 0)
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
}

module.exports = convertToObject;
