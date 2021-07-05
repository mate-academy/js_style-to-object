'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';')
    .map(property => property.trim())
    .filter(property => property.length > 1)
    .map(style => style.split(':'));

  const styles = properties.reduce((prev, [key, value]) => ({
    ...prev,
    [key.trim()]: value.trim(),
  }), {});

  return styles;
}

module.exports = convertToObject;
