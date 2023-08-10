'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectWithProperties = sourceString
    .split('\n')
    .join('')
    .split(';')
    .map((propertie) => propertie.split(':').map((word) => word.trim()))
    .filter((propertie) => propertie.length !== 0)
    .reduce((accumlator, propertie) => {
      return {
        ...accumlator, [propertie[0]]: propertie[1],
      };
    }, {});

  delete objectWithProperties[''];

  return objectWithProperties;
}

module.exports = convertToObject;
