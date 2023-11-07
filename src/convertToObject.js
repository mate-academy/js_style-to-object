'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const styleLinesArray = sourceString.split(';');
  const styleSingleLinesArray = styleLinesArray.map((line) => {
    return line
      .split('')
      .filter((item) => item !== '\n')
      .join('');
  });

  styleSingleLinesArray.forEach((line) => {
    const breakLine = line.split(':');
    const [key, value] = breakLine;

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
