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
  const stylesArray = sourceString
    .split(';')
    .map(entries => entries.split(':')
      .map(property => property.trim()));

  const stylesObject = stylesArray
    .filter(entry => entry.length > 1)
    .reduce((prev, [key, value]) => Object.assign(prev, { [key]: value }), {},);

  return stylesObject;
}

module.exports = convertToObject;
