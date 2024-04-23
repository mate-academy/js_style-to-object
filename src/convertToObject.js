'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString
    .replace(/\n/g, '')
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el.length > 0);

  const obj = {};

  arr.forEach((line) => {
    const [key, val] = line.split(':').map((el) => el.trim());
    const nVal = val.replace(/,/g, ',\n');

    obj[key] = nVal;
  });

  return obj;
}

module.exports = convertToObject;
