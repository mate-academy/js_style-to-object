'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an
 *  exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arr = sourceString.split(';');
  const arrTochks = arr.map(x => x.split(':').map(y => y.trim()));
  const arrFiltre = arrTochks.filter(x => x.length > 1);

  arrFiltre.forEach((x, index) => {
    result[x[0]] = x[1];
  });

  return result;
}

module.exports = convertToObject;
