"use strict";

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const styleObject = {};

  const styleDeclarations = styles.split(";");

  styleDeclarations.forEach((declaration) => {
    if (declaration.includes(":")) {
      const [property, value] = declaration.split(":");
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      if (trimmedProperty && trimmedValue) {
        styleObject[trimmedProperty] = trimmedValue;
      }
    }
  });

  return styleObject;
}
module.exports = convertToObject;
