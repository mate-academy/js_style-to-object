'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};

  const properties = sourceString.split(';');

  properties.forEach((property) => {
    const propertyArr = property
      .split(':')
      .map(item => item.trim());

    if (propertyArr[0] !== '') {
      result[propertyArr[0]] = propertyArr[1];
    }
  });

  return result;
}

module.exports = convertToObject;
