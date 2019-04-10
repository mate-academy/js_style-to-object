'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  var outputObject = {};
  var array = sourceString.split(';').slice(0, -1);

  for (let property of array) {
    var parts = property.split(':');
    var one = parts[0];
    var two = parts[1];

    outputObject[one.trim()] = two.trim();
  }
  return outputObject;
}

module.exports = convertToObject;
