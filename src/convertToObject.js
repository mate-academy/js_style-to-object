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
  const sourceStringParts = sourceString.split(';')
    .filter(propertiesCss => propertiesCss.length > 1 && propertiesCss !== ' ');

  for (const element of sourceStringParts) {
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
