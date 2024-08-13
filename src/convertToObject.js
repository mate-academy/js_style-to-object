'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedObj = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '');

  const resultObj = {};

  splitedObj.forEach((el) => {
    const splitedEl = el.split(':');
    const right = splitedEl[1].trim();
    const left = splitedEl[0].trim();

    resultObj[left] = right;
  });

  return resultObj;
}

module.exports = convertToObject;
