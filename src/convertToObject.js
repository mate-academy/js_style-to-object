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
  const arrayOfProperties = sourceString.split(';');
  const clearedProperties = arrayOfProperties
    .map(property => {
      return property.replace(';', '').replace(/\n/g, '').trim();
    })
    .filter(propery => propery);
  let styleObject = {};

  for (const property of clearedProperties) {
    const keyAndValue = property.split(':');

    keyAndValue[0] = keyAndValue[0] && keyAndValue[0].trim();
    keyAndValue[1] = keyAndValue[1] && keyAndValue[1].trim();

    styleObject = {
      ...styleObject, [keyAndValue[0]]: keyAndValue[1],
    };
  }

  return styleObject;
}

module.exports = convertToObject;
