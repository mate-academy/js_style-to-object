'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';');
  const toObject = {};

  for (let i = 0; i < sourceArr.length; i++) {
    const sourceArrI = sourceArr[i].trim();

    if (sourceArrI.length > 0) {
      const colonIndex = sourceArrI.indexOf(':');

      toObject[sourceArrI.slice(0, colonIndex).trim()]
        = sourceArrI.slice(colonIndex + 1).trim();
    }
  }

  return toObject;
}

module.exports = convertToObject;
