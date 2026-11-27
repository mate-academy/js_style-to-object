'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const conv = sourceString.split(';');
  const declarationObject = {};

  conv.forEach(function (element) {
    if (element.trim() === '') {
      return;
    }

    const [key, value] = element.split(':');

    declarationObject[key.trim()] = value.trim();
  });

  return declarationObject;
}

module.exports = convertToObject;
