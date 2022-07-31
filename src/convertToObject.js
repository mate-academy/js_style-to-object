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
  const stylesArray = sourceString.split('\n')
    .filter(value => value !== '' && value !== '  ;');
  const editedStylesArray = stylesArray.map(mapCallback);
  const obj = {};

  for (const arr of editedStylesArray) {
    for (let i = 1; i < arr.length; i++) {
      const key = String(arr[i - 1]);
      const objValue = arr[i];

      obj[key] = objValue;
    }
  }

  return obj;
}

function mapCallback(valueMap) {
  let property = valueMap;

  property = property.split(':');

  for (let i = 0; i < property.length; i++) {
    const stringOfProperty = property[i].trim();
    let newStringOfProperty = '';

    for (let index = 0; index < stringOfProperty.length; index++) {
      if (stringOfProperty[index] === ';') {
        continue;
      } else if (stringOfProperty[index] === ' '
        && stringOfProperty[index - 1] === ' ') {
        continue;
      } else if (stringOfProperty[index] === ' '
          && stringOfProperty[index + 1] === ' ') {
        continue;
      } else {
        newStringOfProperty += stringOfProperty[index];
      }
    }

    property[i] = newStringOfProperty;
  }

  return property;
}

module.exports = convertToObject;
