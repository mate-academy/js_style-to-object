'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const newArr = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const newObj = newArr.reduce((obj, style) => {
    const [prop, value] = style.split(':').map((part) => part.trim());

    obj[prop] = value;

    return obj;
  }, {});

  return newObj;
}

module.exports = convertToObject;
