'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  // Split by semicolon to get individual CSS declarations
  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    // Find the first colon to split property and value
    const colonIndex = rule.indexOf(':');

    // Skip if no colon found
    if (colonIndex === -1) {
      return;
    }

    // Extract property and value, trimming whitespace
    const property = rule.substring(0, colonIndex).trim();
    const value = rule.substring(colonIndex + 1).trim();

    // Skip if property or value is empty
    if (property === '' || value === '') {
      return;
    }

    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
