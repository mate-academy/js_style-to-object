'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfCss = sourceString.split(';');
  const trimingAndFiltering = arrayOfCss
    .filter((item) => item.trim() !== '')
    .map((item) => item.trim());

  const dividing = trimingAndFiltering.map((item) => {
    const parts = item.split(':');
    const trimmedParts = parts.map((part) => part.trim());

    return trimmedParts;
  });

  const objecting = Object.fromEntries(dividing);

  return objecting;
}

module.exports = convertToObject;
