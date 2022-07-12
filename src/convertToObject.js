'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example)
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl)
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrayDraft = sourceString.split(';');

  for (let i = 0; i < arrayDraft.length; i++) {
    const array = arrayDraft[i].split(':');

    if (array[0] && array[1]) {
      result[array[0].trim()] = array[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
