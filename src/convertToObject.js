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
  const stringArr = sourceString
    .split(';')
    .map(string => (
      string
        .split(':')
    ));

  const callback = (css, style) => {
    return {
      ...css,
      [style[0].trim()]: style[1].trim(),
    };
  };

  return stringArr
    .filter(element => element.length > 1)
    .reduce(callback, {});
}

module.exports = convertToObject;
