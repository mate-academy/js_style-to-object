'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObj = {};
  const newArr = sourceString.split(';')
    .map(item => item.split(':').map(str => str.trim()));

  newArr.map((item, index) => {
    if (item.length === 2) {
      newObj[item[0]] = item[1];
    }
  });

  return newObj;
}

module.exports = convertToObject;
