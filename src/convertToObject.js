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
  const splittedBySemicolon = sourceString.split(';');

  return splittedBySemicolon.reduce((result, firstelem) => {
    const splittedByColon = firstelem.split(':');

    if (splittedByColon[0].trim()) {
      result[splittedByColon[0].trim()] = splittedByColon[1].trim();
    };

    return result;
  }, {});
}

module.exports = convertToObject;
