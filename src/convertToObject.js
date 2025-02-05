'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleObject = {};
  const styleCommands = sourceString.split(';');

  styleCommands.forEach((element) => {
    const [key, value] = element.split(':');

    if (key && value) {
      styleObject[key.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
