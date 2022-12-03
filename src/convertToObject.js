'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rightArray = sourceString.split(';')
    .map(str => str.trim())
    .filter(str => str !== '\n' && str !== '')
    .map(str => str.split(':').map(item => item.trim()));

  const rightObject = Object.fromEntries(rightArray);

  return rightObject;
}

module.exports = convertToObject;
