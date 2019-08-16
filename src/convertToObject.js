'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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

  const ListOfProperties = {};
  for (const item of arrayOfProperties) {
    const [key, value] = item.split(':');
    ListOfProperties[key.trim()] = value.trim();
  }

  return ListOfProperties;
}

module.exports = convertToObject;
