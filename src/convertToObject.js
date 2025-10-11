'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = {};

  sourceString.split(';').forEach((style) => {
    let property;
    let value;

    [property, value] = style.split(':');

    property = property.trim();
    value = (value ?? '').trim();

    if (property !== '') {
      styles[property] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
