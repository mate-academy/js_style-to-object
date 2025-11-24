'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleObject = {};
  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    rule.trim();

    if (rule) {
      const [property, ...valueParts] = rule.split(':');

      if (property && valueParts.length > 0) {
        const value = valueParts.join(':').trim();

        styleObject[property.trim()] = value;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
