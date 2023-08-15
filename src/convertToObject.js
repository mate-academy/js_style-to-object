'use strict';

/**
 * Implement convertToObject function:

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringToArray = sourceString
    .split(';')
    .reduce((styleList, parameters) => {
      const [key, value] = parameters.split(':');

      if (value) {
        styleList[key.trim()] = value.trim();
      }

      return styleList;
    }, {});

  return stringToArray;
}

module.exports = convertToObject;
