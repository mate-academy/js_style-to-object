'use strict';

/**
 * Converts a CSS-like string of declarations into an object.
 * Each line is expected to have the format 'property: value;'
 *
 * @param {string} sourceString - The input CSS-like string
 * @return {object} - Object representation of CSS properties
 */
const string = `
  cursor: pointer;
  float: left;
  font-family: inherit;`;

function convertToObject(sourceString) {
  const result = {}; // Initialize an empty object to store key-value pairs

  // Split the string into individual declarations using ';' as the separator
  const declarationsArray = sourceString.split(';');

  declarationsArray.forEach((declaration) => {
    // For each declaration, split it into property and value
    const propertyPair = declaration
      .split(':')
      .map((element) => element.trim()); // and trim both parts

    // If we have both property and value, add them to the result object
    const [property, value] = propertyPair;

    // if (property && value) {
    //   result[property] = value;
    // }

    // ensure that empty property names are not included
    if (property !== '' && value) {
      result[property] = value;
    }
  });

  return result; // Return the final object containing all properties
}

convertToObject(string);

module.exports = convertToObject;
