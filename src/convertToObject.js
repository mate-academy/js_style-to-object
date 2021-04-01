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
  const propertiesList = {};

  const splitRules = sourceString.split(';');

  splitRules.pop();

  for (let i = 0; i < splitRules.length; i++) {
    const splitProperty = splitRules[i].trim().split(':');

    propertiesList[splitProperty[0]] = splitProperty[1].trim();
  }

  return propertiesList;
}

module.exports = convertToObject;
