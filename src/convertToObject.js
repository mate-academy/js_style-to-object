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
  // write your code here
  const sourceArray = sourceString.split(';');
  const styleArray = sourceArray.map(x => x.split(':'));

  const styleArray2 = styleArray.map(y => {
    const trimmedArray = y.map(elem => elem.trim());

    return trimmedArray;
  });

  const newObj = styleArray2.reduce(function(a, x) {
    a[x[0]] = x[1];

    if (x[1] === undefined) {
      delete a[x[0]];
    }

    return a;
  }
  , {});

  return newObj;
}

module.exports = convertToObject;
