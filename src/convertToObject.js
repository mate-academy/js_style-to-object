'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // string.split.filter.reduce => 1 object[key, value]
  const styles = sourceString
    .split(';')
    .filter(Boolean)
    .reduce((acc, current) => {
      const [property, value] = current.split(':').map((str) => str.trim());

      acc[property] = value;

      return acc;
    }, {});

  return styles;
}

module.exports = convertToObject;
