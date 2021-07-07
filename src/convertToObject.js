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
  const sourceArray = sourceString.split(';');
  sourceArray.pop();
  const sourceObject = {};

  sourceArray.forEach(function(item) {
    const valuesForObject = item.split(':');
    sourceObject[valuesForObject[0].trim()] = valuesForObject[1].trim();
  });

  return sourceObject;
}

module.exports = convertToObject;
