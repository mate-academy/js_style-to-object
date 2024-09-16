'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propList = sourceString
    .split(';')
    .filter(prop => prop.toLowerCase() !== prop.toUpperCase())
    .map(propElems => {
      return propElems
        .trim()
        .split(':')
        .map(elem => elem.trim());
    });
  const convertedObject = Object.fromEntries(new Map([...propList]));

  return convertedObject;
}

module.exports = convertToObject;
