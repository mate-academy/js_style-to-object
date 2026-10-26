'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';').filter((line) => line.trim());

  return styles.reduce((acc, style) => {
    const properties = style.split(':');
    const lines = properties.map((property) => property.trim());

    acc[lines[0]] = lines[1];

    return acc;
  }, {});
}

module.exports = convertToObject;
