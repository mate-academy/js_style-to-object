/* eslint-disable no-useless-escape */
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
  const sourceProperties = [];

  const arrayFromString = sourceString
    .split(';');

  arrayFromString.forEach(property => {
    // eslint-disable-next-line max-len
    const trimedProperties = property.split(': ');

    if (trimedProperties[0] && trimedProperties[1]) {
      const key = trimedProperties[0].trim();
      const value = trimedProperties[1].trim();

      sourceProperties.push([key, value]);
    }
  });

  return Object.fromEntries(sourceProperties);
}

module.exports = convertToObject;
