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
    const style = property.split(':');

    let [key, value] = style;

    key = key.trim();
    value = value ? value.trim() : '';

    if (value !== '') {
      obj[key] = value;
    }

    return obj;
  }, {});
}

module.exports = convertToObject;
