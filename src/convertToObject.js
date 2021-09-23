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
  const regex = /(\S.*?:)(\s.*\b)/g;
  const arrOfLines = sourceString.match(regex);

  return arrOfLines.reduce((result, line) => {
    let [key, value] = line.split(':');

    key = key.trim();
    value = value.trim();

    return {
      ...result,
      [key]: value,
    };
  }, {});
}

module.exports = convertToObject;
