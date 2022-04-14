'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string
 *  with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const pairArr = sourceString.split(';');
  const splitePairArr = pairArr.map(x => x.split(':'));
  const withoutEmptyArr = splitePairArr.filter(x => x.length === 2);

  withoutEmptyArr.forEach(function(item) {
    item[0] = item[0].trim();
    item[1] = item[1].trim();
    result[item[0]] = item[1];
  });

  return result;
}

module.exports = convertToObject;
