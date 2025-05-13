'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .forEach((cssProperty) => {
      const [key, ...values] = cssProperty.split(':');

      if (key && values.length > 0) {
        result[key.trim()] = values.join(':').trim();
      }
    });

  return result;
}

module.exports = convertToObject;
