'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const cleanString = (str) => str.replace(/[\t\n]/g, '');
  const newString = cleanString(sourceString);
  let array = [];
  const words = newString.split(';');

  if (sourceString === '' || sourceString === undefined) {
    return result;
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i].trim() === '') {
      continue;
    }
  }

  for (const i of words) {
    array = i.split(':');

    if (array.length > 1) {
      array[1] = array[1].trim();

      if (array[1].includes(',')) {
        array[1] = array[1].split(',');
        array[1] = array[1].join(',\n');
      }
      result[array[0].trim()] = array[1];
    }
  }

  return result;
}

module.exports = convertToObject;
