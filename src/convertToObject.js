'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const result = {};

  styles
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean)
    .forEach((rule) => {
      const [prop, ...valueParts] = rule.split(':');

      if (!prop || valueParts.length === 0) {
        return;
      }

      const key = prop.trim();
      const value = valueParts.join(':').trim();

      if (key && value) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
