/* eslint-disable prettier/prettier */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const trimStr = sourceString.split(';');

  const obj = trimStr.reduce((acc, item) => {
    const [key, value] = item.split(':').map((str) => str.trim());

    acc[key] = value;

    return acc;
  }, {});

  return obj;
}

module.exports = convertToObject;
