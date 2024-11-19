'use strict';

const complexStylesString = require('./stylesString');

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const splited = sourceString.split(';');

  const clear = splited.map((elem) => {
    return elem.trim();
  });

  const filtred = clear.filter((elem) => {
    return elem.length > 0;
  });

  const transofmed = filtred.map((elem) => {
    const [key, value] = elem.split(':').map((str) => str.trim());

    return { [key]: value };
  });

  const result = {};

  transofmed.forEach((elem) => {
    Object.assign(result, elem);
  });

  return result;
}

convertToObject(complexStylesString);
module.exports = convertToObject;
