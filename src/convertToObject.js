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
  const resultObj = {};
  const replaceStyle = sourceString.split(';')
    .map(item => item.split(':').map(str => str.trim()))
    .filter(item => item.length === 2);

  replaceStyle.forEach(item => {
    resultObj[item[0]] = item[1];
  });

  return resultObj;
}

module.exports = convertToObject;
