'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map(property => property.trim())
    .filter(property => property !== '');

  const stylesProperties = stylesArray.reduce((stylesObject, property) => {
    const [key, value] = property.split(':');

    stylesObject[key.trim()] = value.trim();

    return stylesObject;
  }, {});

  return stylesProperties;
}

module.exports = convertToObject;
