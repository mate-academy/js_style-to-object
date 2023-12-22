'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes styles string
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

const stylesString = require('./stylesString');

convertToObject(stylesString);

function convertToObject(sourceString) {
  const keyValueArr = removeSpecificCharacters(sourceString).split(';');

  return keyValueArr.reduce((styleList, style) => {
    let [key, value] = style.split(':');

    if (value) {
      key = removeSpecificCharacters(key);
      value = removeExtraSpaces(removeSpecificCharacters(value));

      return {
        ...styleList,
        ...{
          [key]: value,
        },
      };
    } else {
      return {
        ...styleList,
      };
    }
  }, {});
}

function removeSpecificCharacters(str) {
  const strArr = String(str).replace(/(\r\n|\n|\r)/gm, '');

  return strArr.trim();
}

function removeExtraSpaces(valueString) {
  return String(valueString).split(' ').filter(value => value).join(' ');
}

module.exports = convertToObject;
