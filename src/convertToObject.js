'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((line) => line.trim())
    .reduce((result, line) => {
      const [property, value] = line.split(':').map((part) => part.trim());

      if (property && value) {
        result[property] = value;
      }

      return result;
    }, {});

  return styles;
}

module.exports = convertToObject;
