'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const properties = sourceString
    .split(';')
    .map((elem) => elem.trim())
    .filter((elem) => elem.length > 0)
    .map((elem) => elem.split(':'))
    .map((elem) => elem.map((n) => n.trim()));

  properties.forEach(([property, value]) => (styleObject[property] = value));

  return styleObject;
}

module.exports = convertToObject;
