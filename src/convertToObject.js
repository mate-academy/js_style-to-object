'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const clearString = sourceString.trim();
  let cleanedString = '';

  for (let i = 0; i < clearString.length; i++) {
    if (
      clearString[i] === ';' &&
      (i === 0 || clearString[i - 1] === ';' || i === clearString.length - 1)
    ) {
      continue;
    }
    cleanedString += clearString[i];
  }

  const stylesArray = cleanedString
    .split(';')
    .filter((style) => style.trim() !== '');
  const stylesObject = {};

  for (const style of stylesArray) {
    const [key, value] = style.split(':');

    if (key && value) {
      stylesObject[key.trim()] = value.trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
