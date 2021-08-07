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
  let correctProperties = sourceString.split('\n');

  correctProperties = correctProperties.filter(
    item => item.length !== 0 && item.trim() !== ';',
  );

  const propertiesFormatted = correctProperties.map(
    item => {
      const colonIndex = item.indexOf(':');
      const property = item.slice(0, colonIndex).trim();
      const propertyValue = item.slice(colonIndex + 1, -1).trim();

      return ({
        [property]: propertyValue,
      });
    }
  );

  return Object.assign({}, ...propertiesFormatted);
}

module.exports = convertToObject;
