'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
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
