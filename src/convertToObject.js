'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString.split(';');

  const trimmedArray = splittedString.map((item) => {
    return item.trim();
  });

  for (let i = 0; i < trimmedArray.length; i++) {
    if (trimmedArray[i] === '' || trimmedArray[i] === ' ') {
      trimmedArray.splice(i, 1);
      i--;
    }
  }

  return trimmedArray.reduce((acc, item) => {
    const [key, value] = item.split(':');
    acc[key.trim()] = value.trim();
    return acc;
  }, {});
}

module.exports = convertToObject;
