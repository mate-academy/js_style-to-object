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
  const convertedToObject = {};
  const splitedSourceString = sourceString.split(';');

  const arrayOfProperties = splitedSourceString.map(string =>
    string.trim().split(':'));

  for (const element of arrayOfProperties) {
    if (element[0] === '') {
      continue;
    }

    convertedToObject[`${element[0].trim()}`] = element[1].trim();
  }

  return convertedToObject;
}

module.exports = convertToObject;
