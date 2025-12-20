'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const transformObject = {};
  const stringToArr = sourceString.split(';');

  for (let i = 0; i < stringToArr.length; i++) {
    const lineTrim = stringToArr[i].trim();

    if (lineTrim.length !== 0) {
      const partLine = lineTrim.split(':');
      let key;
      let value;

      for (let j = 0; j < partLine.length; j++) {
        const valueTrim = partLine[j].trim();

        if (j === 0) {
          key = valueTrim;
        }

        if (j === 1) {
          value = valueTrim;
        }
      }
      transformObject[key] = value;
    }
  }

  return transformObject;
}

module.exports = convertToObject;
