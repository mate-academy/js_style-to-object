'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const desiredArray = sourceString.split(';');
  const styles = {};

  desiredArray.forEach((item) => {
    const property = item.split(':');

    if (property[1] !== undefined) {
      styles[property[0].trim()] = property[1].trim();
    };
  });

  return styles;
}

module.exports = convertToObject;
