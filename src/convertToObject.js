'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObject = {};
  const sourceArray = sourceString.split(';');

  sourceArray.filter(style => style
    .includes(':'))
    .forEach(element => {
      const [key, value] = element.split(':').map(style => style.trim());

      sourceObject[key] = value;
    });

  return sourceObject;
}

module.exports = convertToObject;
