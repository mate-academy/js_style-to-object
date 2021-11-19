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
  const sourceStringArr = sourceString
    .split(';')
    .map(item => {
      const newItem = item.split(':');

      return {
        [newItem[0].trim()]: (newItem[1] + '').trim(),
      };
    });

  const result = sourceStringArr.reduce((prev, next) => {
    if (!Object.keys(next)[0]) {
      return { ...prev };
    } else {
      return {
        ...prev,
        ...next,
      };
    }
  }, {});

  return result;
}

module.exports = convertToObject;
