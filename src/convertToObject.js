'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringMass = [];
  const sourceStringMass = sourceString.split(';');

  for (let i = 0; i < sourceStringMass.length; i++) {
    if (sourceStringMass[i].includes(':')) {
      stringMass.push(sourceStringMass[i]);
    }
  }

  const result = sourceStringMass.reduce((prev, item) => {
    const tempMass = item.split(':').map((string) => string.trim());

    prev[tempMass[0]] = tempMass[1];

    return prev;
  }, {});

  return result;
}

module.exports = convertToObject;
