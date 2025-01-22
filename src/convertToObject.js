'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const toArr = sourceString
    .trim()
    .split(';')
    .map((el) => el.trim());
  const clineArr = toArr.filter((element) => element.length > 1);
  const result = {};

  clineArr.forEach((rules) => {
    const rulesToArr = rules.split(':');
    const [key, value] = rulesToArr;

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
