'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  return styles.reduce((acc, style) => {
    const [property, value] = style.split(':');

    if (property && value) {
      acc[property.trim()] = value.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
