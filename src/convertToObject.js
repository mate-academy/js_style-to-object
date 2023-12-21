'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles(seeanexamplein[stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the valuesofrelated CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString.split(';').filter(Boolean);

  const stylesObject = {};

  styleArray.forEach(styleDeclaration => {
    const [property, value] = styleDeclaration.split(':').map(part =>
      part.trim());

    if (property && value) {
      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
