'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArr = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((item) => item.length > 0)
    .map((item) => item.split(':'));

  const result = newArr.reduce((acc, item, i) => {
    const [key, value] = item;

    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
