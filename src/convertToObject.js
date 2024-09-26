'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Transform string into array of lines
  const propertiesArray = sourceString.split(';');
  const styles = {};

  // Transform separate lines of the array of properties into key-value pairs
  propertiesArray.forEach((property) => {
    const parts = property.split(':');

    const key = dataCleanup(parts[0]);
    const value = dataCleanup(parts[1]);

    // Add to the resulting object only the lines with both key and value
    if (key.length && value.length) {
      styles[key] = value;
    }
  });

  return styles;
}

/**
 * @param {any} item
 *
 * @returns {string}
 *
 * Remove whitespaces around the parts of the property
 */
function dataCleanup(item) {
  return String(item).trim();
}

module.exports = convertToObject;
