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
  const rawProperies = sourceString.split(';');
  const properties = rawProperies.filter(property => {
    return property.includes(':');
  });

  const cssSelectorObj = {};

  for (const property of properties) {
    const [key, value] = property.split(':');

    cssSelectorObj[key.trim()] = value.trim();
  }

  return cssSelectorObj;
}

module.exports = convertToObject;
