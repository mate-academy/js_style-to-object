'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitCleanProperties = sourceString
    .split(';')
    .map((dirtyProperty) => dirtyProperty.trim());

  const validPropertyStrings = splitCleanProperties.filter(
    (property) => property,
  );

  return validPropertyStrings.reduce((state, propertyString) => {
    const property = propertyStringToObject(propertyString);

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
  const cleanPropertyParts = propertyString
    .split(':')
    .map((dirtyPart) => dirtyPart.trim());

  const [name, args] = cleanPropertyParts;

  return { name, args };
}

module.exports = convertToObject;
