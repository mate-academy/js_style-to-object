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

  sourceString
    .split('\n')
    .map(a => a.trim())
    .filter((item) => item !== ';' && item !== '')
    .forEach(function(valuesArr) {
      const valuesForObject = valuesArr
        .slice(0, valuesArr.length - 1)
        .split(':')
        .map(tr => tr.trim());

      const key = valuesForObject[0];
      const value = valuesForObject[1];

      resultObject[key] = value;
    });

  return resultObject;
}

module.exports = convertToObject;
