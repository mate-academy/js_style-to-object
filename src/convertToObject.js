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
  const propertiesPairs = sourceString.split(';');
  if (propertiesPairs[propertiesPairs.length] === undefined) {
    propertiesPairs.pop();
  }
  const resultProperties = {};
  for (let item of propertiesPairs) {
    item = item.split(':');
    resultProperties[item[0].trim()] = item[1].trim();
  }
  return resultProperties;
}

module.exports = convertToObject;
