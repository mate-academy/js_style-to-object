'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const propertiesArr = sourceString.split(';');

  for (let i = 0; i < propertiesArr.length; i++) {
    const splittedProp = propertiesArr[i].split(':');

    if (splittedProp[0] && splittedProp[1]) {
      result[splittedProp[0].trim()] = splittedProp[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
