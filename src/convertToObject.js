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
  const resultObject = {};
  const sourseArray = sourceString
    .split(';')
    .map(item => item.split(':'));

  const filteredArray = sourseArray.filter(item => item.length === 2);

  filteredArray.forEach(item => {
    const key = item[0].trim();
    const value = item[1].trim();

    resultObject[key] = value;
  });

  return resultObject;
}

module.exports = convertToObject;
