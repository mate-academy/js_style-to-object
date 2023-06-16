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
  const trimmedString = sourceString.trim();
  const styleArray = trimmedString.split('\n');

  const styleObject = styleArray.reduce((object, style) => {
    const trimmedStyle = style.trim();

    if (trimmedStyle !== '') {
      const [property, value] = trimmedStyle.split(':');

      if (property && value) {
        const trimmedProperty = property.trim();
        const valueWithNoSemi = value.replace(/;/g, '');
        const trimmedValue = valueWithNoSemi.trim();

        object[trimmedProperty] = trimmedValue;
      }
    }

    return object;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
