'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const massOfSource = sourceString.split(';');
  const objectOfSource = {};

  massOfSource.forEach((source) => {
    const words = source.split(':');

    if ((words[1]) || (words[2])) {
      const property = words[0].trim();
      const value = words[1].trim();

      objectOfSource[property] = value;
    }
  });

  return objectOfSource;
}

module.exports = convertToObject;
