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
  const styleArray1 = sourceString.split(';');
  const styleArray2 = styleArray1.map(el => el.split(':'));
  let styleArray3 = [];
  const styleArray4 = styleArray2.map(el => {
    if (el.length > 1) {
      styleArray3 = el.map(y => y.trim());
    }

    return styleArray3;
  });

  const newObject = styleArray4.reduce((a, x) => {
    a[x[0]] = x[1];

    return a;
  }, {});

  return newObject;
}

module.exports = convertToObject;
