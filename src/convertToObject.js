'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const CONTAIN_LETTER_REGEX = /\w/;
  const SPECIAL_SYMBOLS_REGEX = /\*+/g;
  const styleObj = {};

  const rules = sourceString.split(';');
  const normalizedRules = rules
    .filter(rule => rule.match(CONTAIN_LETTER_REGEX))
    .map(rule => rule.replace(SPECIAL_SYMBOLS_REGEX, '').trim());

  normalizedRules.forEach(rule => {
    const [property, value] = rule.split(':').map(str => str.trim());

    styleObj[property] = value;
  });

  return styleObj;
}

module.exports = convertToObject;
