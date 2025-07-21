'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(';')
    .map((stringFilter) => stringFilter.trim())
    .filter(Boolean)
    .forEach((stringFiltered) => {
      const [property, ...valueParts] = stringFiltered.split(':');

      const key = property.trim();
      const value = valueParts.join(':').trim();

      styles[key] = value;
    });

  return styles;
}

module.exports = convertToObject;
