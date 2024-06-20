'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (
    typeof sourceString !== 'string' ||
    sourceString === null ||
    sourceString === undefined
  ) {
    throw new Error('Invalid input: sourceString must be a non-null string');
  }

  const cssProperties = sourceString.split(';');

  return cssProperties.reduce((obj, property) => {
    const [key, value] = property.split(':');

    if (value !== '') {
      obj[key.trim()] = value.trim();
    }

    return obj;
  }, {});
}

module.exports = convertToObject;
