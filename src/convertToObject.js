'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertyStrings = sourceString
    .split(';')
    .map((dirty) => dirty?.trim())
    .filter((propStr) => propStr !== '');

  const properties = propertyStrings.map(propertyStringToObject);

  return properties.reduce(
    (state, property) => Object.assign(state, property),
    {},
  );
}

/**
 * @param {string} str
 *
 * @return {object}
 */
function propertyStringToObject(str) {
  const [name, args] = str.split(':').map((dirty) => dirty?.trim());

  return { [name]: args };
}

module.exports = convertToObject;
