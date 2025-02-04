'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  rules.forEach((rule) => {
    const [property, ...valueParts] = rule.split(':');

    if (property && valueParts.length) {
      const value = valueParts.join(':').trim();

      if (value.includes('\n')) {
        stylesObject[property.trim()] = value;
      } else {
        stylesObject[property.trim()] = value;
      }
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
