'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convert = {};
  const strArr = sourceString.split(';');

  const dividedStrArr = strArr.map(elementArr => elementArr.split(':'));

  dividedStrArr.forEach(divid => {
    if (divid.length === 2) {
      divid[0] = divid[0].trim();
      divid[1] = divid[1].trim();
      convert[divid[0]] = divid[1];
    }
  });

  return convert;
}

module.exports = convertToObject;
