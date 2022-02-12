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
  const mass = sourceString.split('\n');
  const mass2 = mass.join('').split(';');
  const res = mass2.map(item => item.split(':'));
  const resutlObject = {};

  res.forEach(item => {
    if (item.length === 2) {
      item[0] = item[0].trim();
      item[1] = item[1].trim();
      resutlObject[item[0]] = item[1];
    }
  });

  return resutlObject;
}

module.exports = convertToObject;
