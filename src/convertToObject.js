'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const colon = ':';
  const semilcon = ';';

  sourceString.split(semilcon)
    .reduce((acc, stylePair) => {
      const [property, value] = stylePair.split(colon);

      if (property && value) {
        const styleName = property.trim();
        const styleValue = value.trim();

        stylesObject[styleName] = styleValue;
      }

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
