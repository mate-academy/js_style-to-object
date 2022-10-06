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
  const str = sourceString.split(';').map(x => x.trim()).filter(x => x)
    .map(x => x.split(':').map(word => word.trim()).join(':'));

  const obj = str.reduce((prev, x) => {
    return {
      ...prev,
      [x.slice(0, x.indexOf(':'))]: x.slice(x.indexOf(':') + 1),
    };
  }, {});

  return obj;
}

module.exports = convertToObject;
