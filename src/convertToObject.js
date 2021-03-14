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
  const result = {};
  const arrSourceString = sourceString.split(';');

  arrSourceString.filter(i => i.length > 1 && i !== ' ');

  for (const element of arrSourceString) {
    const css = element.split(':');

    if (css[1] !== undefined) {
      css[0] = css[0].trim();
      css[1] = css[1].trim();
      result[css[0]] = css[1];
    }
  }

  return result;
};

module.exports = convertToObject;
