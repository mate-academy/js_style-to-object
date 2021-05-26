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
  let getArray = sourceString.split(';');
  let bufferArray = [];
  let delTransferal = '';
  const result = {};

  for (const elem of getArray) {
    delTransferal = String(elem).replace(/\r?\n/g, ' ');
    bufferArray = delTransferal.split(':');

    if (bufferArray[0] && bufferArray[1]) {
      delTransferal = `${bufferArray[0].trim()}:${bufferArray[1].trim()}:`;
    }
    getArray = delTransferal.split(':');

    if (getArray[1]) {
      result[getArray[0]] = getArray[1];
    }
  }

  return result;
}

module.exports = convertToObject;
