'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '');
  const nweArr = arr.map((el) => el.split(':').map((item) => item.trim()));

  const obj = {};

  for (const elem of nweArr) {
    const key = elem[0];
    const value = elem[1];

    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
