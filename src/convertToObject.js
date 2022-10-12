'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const filteredArray = sourceString.split(';')
    .filter(element => element.length > 4);

  const object = {};

  for (let i = 0; i < filteredArray.length; i++) {
    const splitByKeyAndValue = filteredArray[i].split(':');

    const key = splitByKeyAndValue[0].trim();
    const value = splitByKeyAndValue[1].trim();

    object[key] = value;
  }

  return object;
}

module.exports = convertToObject;
