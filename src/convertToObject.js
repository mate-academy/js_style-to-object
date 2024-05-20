'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfSource = sourceString
    .split(';')
    .filter((part) => part.trim() !== '');
  const MappedArrayOfSource = arrayOfSource.map((part) => {
    return part.split(':');
  });
  const result = {};

  MappedArrayOfSource.forEach((line) => {
    result[line[0].trim()] = line[1].trim();
  });

  return result;
}

module.exports = convertToObject;
