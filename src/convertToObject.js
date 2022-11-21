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
  // write your code here
  const propertiesArr = sourceString.replace(/[\r\n]/gm, '').split(';');
  const propObj = propertiesArr.reduce((acc, cssProperty) => {
    const [key, value] = cssProperty.split(':');

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return { ...acc };
  }, {});

  return propObj;
}

module.exports = convertToObject;
