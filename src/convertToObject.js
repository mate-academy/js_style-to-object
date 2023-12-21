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
  const styleObject = {};
  let sourceStringManage = sourceString;

  sourceStringManage = sourceStringManage.trim();

  const stylesArray = sourceStringManage.split(';');

  stylesArray.forEach(style => {
    const [propertyName, propertyValue] = style.split(':');

    const cleanPropertyName = propertyName.trim();
    const cleanPropertyValue = propertyValue ? propertyValue.trim() : '';

    if (cleanPropertyName && cleanPropertyValue) {
      styleObject[cleanPropertyName] = cleanPropertyValue;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
