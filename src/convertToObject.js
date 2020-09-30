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
  const sourceStringSplitted = sourceString.split(';');
  const sourceStringConverted = {};

  for (const CSSrule of sourceStringSplitted) {
    if (CSSrule.trim()) {
      const property = CSSrule.split(':')[0].trim();
      const value = CSSrule.split(':')[1].trim();

      sourceStringConverted[property] = value;
    }
  }

  return sourceStringConverted;
}

module.exports = convertToObject;
