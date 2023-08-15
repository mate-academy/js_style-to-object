'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringToArray = sourceString
    .split(';')
    .map(line => line.trim());

  const cleanLine = stringToArray.map(line => {
    return line
      .split(':')
      .map(element => element.trim());
  });

  const objectSourceString = {};

  cleanLine.forEach(element => {
    const [ key, value ] = element;

    if (key && value) {
      objectSourceString[key] = value;
    }
  });

  return objectSourceString;
}

module.exports = convertToObject;
