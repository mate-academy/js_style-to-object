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
  const stylesData = {};

  sourceString.split(';').forEach(function(item) {
    stylesData[item.substr(0, item.indexOf(':')).trim()]
      = item.substr(item.indexOf(':') + 1).trim();
  }
  );

  delete stylesData[''];

  return stylesData;
}

module.exports = convertToObject;
