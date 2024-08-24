'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString.split(';').forEach((declaration) => {
    let [property, value] = declaration.split(':');

    if (property && value) {
      property = property.trim();
      value = value.trim();
      styles[property] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
