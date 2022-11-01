'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};

  const sourseArr = sourceString
  .replace(/;/g, '')
  .split('\n')
  .filter(item => item.includes(':')
  );

 const assignProperty = (param) => {
  const property = param.split(':').map(prop => prop.trim())
  convertedObject[property[0]] = property[1];

  return convertedObject;
 }

 sourseArr.forEach(assignProperty)

  return convertedObject;
}

module.exports = convertToObject;
