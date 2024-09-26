'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let sourceInLine = '';
  for (let i = 0; i < sourceString.length; i++) {
    if (sourceString[i] !== '\n') {
      sourceInLine += sourceString[i];
    }
  }

  const arrFromSourse = sourceInLine.split(';');
  const arrayOfProperties = [];
  for (const item of arrFromSourse) {
    if (item !== '') {
      arrayOfProperties.push(item);
    }
  }

  const listOfProperties = {};
  for (const item of arrayOfProperties) {
    const [key, value] = item.split(':');
    listOfProperties[key.trim()] = value.trim();
  }

  return listOfProperties;
}

module.exports = convertToObject;
