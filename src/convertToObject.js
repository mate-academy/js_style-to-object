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
  return sourceString
    .split('\n')
    .reduce((prev, rule) => {
      const next = { ...prev };
      const currentRule = rule.replace(';', '');

      if (currentRule) {
        const [property, value] = currentRule
          .split(':')
          .map(item => item.trim());

        next[property] = value;
      }

      return next;
    }, {});
}

module.exports = convertToObject;
