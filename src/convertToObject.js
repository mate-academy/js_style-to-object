'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .forEach((decl) => {
      const [property, ...valueParts] = decl.split(':');

      if (!property || valueParts.length === 0) {
        return;
      }

      const key = property.trim();
      const value = valueParts.join(':').trim();

      styles[key] = value;
    });

  return styles;
}

module.exports = convertToObject;
