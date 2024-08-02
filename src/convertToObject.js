'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedString = {};
  const styleCommands = sourceString.split(';');

  styleCommands.forEach((element) => {
    const [key, value] = element.split(':');

    if (key && value) {
      convertedString[key.trim()] = value.trim();
    }
  });

  return convertedString;
}

module.exports = convertToObject;
