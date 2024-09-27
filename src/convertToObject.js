'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrStyles = sourceString.split(';');

  arrStyles.forEach(elem => {
    const property = elem.split(':');

    if (property[1]) {
      result[property[0].trim()] = property[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
