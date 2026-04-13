'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter((style) => style.trim() !== '')
    .reduce((acc, style) => {
      const [property, value] = style.split(':').map((part) => part.trim());

      acc[property] = value;

      return acc;
    }, {});

  return styles;
}

module.exports = convertToObject;
