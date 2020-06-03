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
  const properties = sourceString.replace(/\s{2,}/g, '').split(';');
  const outputObject = {};

  for (let i = 0; i < properties.length; i++) {
    const property = properties[i].trim().split(':');

    if (property[0] !== '' && property[1] !== '') {
      outputObject[property[0]] = property[1].trim();
    }
  }

  return outputObject;
}

module.exports = convertToObject;
