'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesArray = sourceString.split(';');
  let propValuesArray = [];
  let index = 0;

  for (let i = 0; i < propertiesArray.length; i++) {
    propertiesArray[i] = propertiesArray[i].trim();
  }

  for (const property of propertiesArray) {
    if (property !== ';' && property !== '') {
      propValuesArray[index] = property;
      index++;
    }
  }

  propValuesArray = propValuesArray.map(property => property.split(':'));

  for (let i = 0; i < propValuesArray.length; i++) {
    propValuesArray[i][0] = propValuesArray[i][0].trim();
    propValuesArray[i][1] = propValuesArray[i][1].trim();
  }

  const resultObj = {};

  for (let i = 0; i < propValuesArray.length; i++) {
    resultObj[propValuesArray[i][0]] = propValuesArray[i][1];
  }

  return resultObj;
}

module.exports = convertToObject;
