'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 *  [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanedString = sourceString.replace('\n', '');
  const rules = cleanedString.split(';');
  const filteredRules = rules.filter(el => el.trim() !== '');
  const stylesCss = {};

  for (const rule of filteredRules) {
    const item = rule.split(':');
    const property = item[0];
    const value = item[1];

    stylesCss[property.trim()] = value.trim();
  }

  return stylesCss;
}

module.exports = convertToObject;
