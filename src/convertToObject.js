'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 *
 */
const removeSpaces = (str) => str.trim();

function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .map(removeSpaces)
    .filter((el) => el.length > 0)
    .reduce((obj, el) => {
      const propStyle = el.split(':').map(removeSpaces);
      const [prop, value] = propStyle;

      obj[prop] = value;

      return obj;
    }, styleObject);

  return styleObject;
}
module.exports = convertToObject;
