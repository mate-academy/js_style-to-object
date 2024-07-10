'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertyStrings = sourceString
    .split(';')
    .map((dirtyProperty) => dirtyProperty.trim())
    .filter((property) => property !== '');

  const properties = propertyStrings.map(propertyStringToObject);

  return properties.reduce((state, property) => {
    state[property.name] = property.args;

    return state;
  }, {});
}

/**
 * @param {string} propertyString
 *
 * @return {object}
 */
function propertyStringToObject(propertyString) {
  const [name, args] = propertyString
    .split(':')
    .map((dirtyProperty) => dirtyProperty.trim());

  return { name, args };
}

module.exports = convertToObject;
