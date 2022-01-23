'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedStylesArray = sourceString
    .split(';')
    .map(propertyString => propertyString
      .split(':')
      .map(attribute => attribute.trim()))
    .filter(styleRule => styleRule.length > 1);

  return Object.fromEntries(formatedStylesArray);
}

module.exports = convertToObject;
