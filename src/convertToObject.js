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
  const stringArr = sourceString.split(';').map(string => (
    string.split(':').map(e => e.trim()))
  );

  const callback = (css, style) => {
    return {
      ...css,
      [style[0]]: style[1],
    };
  };

  return stringArr.filter(element => element.length > 1).reduce(callback, {});
}

module.exports = convertToObject;
