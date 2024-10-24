'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  // Split the input string by semicolons to get individual declarations
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    // Trim whitespace from the declaration
    const trimmedDeclaration = declaration.trim();

    // Ignore empty declarations
    if (!trimmedDeclaration) {
      return;
    }

    // Split each declaration into property and value
    const [property, value] = trimmedDeclaration
      .split(':')
      .map((part) => part.trim());

    // Add the property and value to the styles object
    styles[property] = value;
  });

  return styles;
}

module.exports = convertToObject;
