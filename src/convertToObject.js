'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  // Trim the string, remove extra spaces and split by semicolons
  const styleArray = sourceString.trim().split(';').map(style => style.trim()).filter(Boolean);

  // Iterate through each style declaration
  styleArray.forEach(style => {
    // Split into key and value
    const [key, value] = style.split(':').map(part => part.trim());

    // If both key and value are non-empty, add them to the object
    if (key && value) {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;

