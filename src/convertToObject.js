'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const string = sourceString
    .split(';')
    .filter(pair => pair.trim() !== ''
    );

  const result = {};

  string.forEach(pair => {
    const [key, value] = pair.split(':').map(part => part.trim());

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
