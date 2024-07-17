'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const listArrays = sourceString
    .split(';')
    .filter((item) => item.length)
    .map((element) => element.split(':').map((item) => item.trim()));

  const resultObject = {};
  const filterArray = listArrays.reduce((acc, value) => {
    const [key, val] = value;

    acc[key] = val;

    return acc;
  }, resultObject);

  return filterArray;
}

module.exports = convertToObject;
