'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Split the input string by semicolon to separate each CSS declaration
  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    // Ignore empty declarations
    if (!declaration.trim()) {
      continue;
    }

    // Split each declaration by colon to separate the property and value
    const [property, value] = declaration.split(':');

    if (property && value) {
      // Trim any surrounding whitespace from the property and value
      const cssProperty = property.trim();
      const cssValue = value.trim();

      // Assign the property and value to the result object without changing
      // case
      result[cssProperty] = cssValue;
    }
  }

  return result;
}

module.exports = convertToObject;
