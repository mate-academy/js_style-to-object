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
  const properties = sourceString.split(';');

  return properties.reduce((cssPairs, property) => {
    const [key, value] = property.split(':');

    if (key && value) {
      const keyClear = key.replace(/\s/g, '');
      const valueClear = value.replace(/^\s+|\s+$/g, '');

      cssPairs[keyClear] = valueClear;
    }

    return cssPairs;
  }, {});
}

module.exports = convertToObject;
