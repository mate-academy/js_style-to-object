'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const propsAndValues = sourceString
    .split(';')
    .filter(str => str.trim().length > 0)
    .map(prop => prop.split(':'));

  for (const [property, value] of propsAndValues) {
    styles[property.trim()] = value.trim();
  }

  return styles;
}

module.exports = convertToObject;
