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
function convertToObject(sourceString) {
  const keyValueArr = removeSpecificCharacters(sourceString).split(';');
  const resultObj = {};

  keyValueArr.forEach(keyValue => {
    let [key, value] = keyValue.split(':');

    if (value) {
      key = removeSpecificCharacters(key);
      value = removeExtraSpaces(removeSpecificCharacters(value));
      resultObj[key] = value;
    }
  });

  return resultObj;
}

function removeSpecificCharacters(str) {
  const CHARS_TO_FILTER = ['\n'];
  const strArr = String(str).split();

  return strArr.filter(char => !CHARS_TO_FILTER.includes(char)).join().trim();
}

function removeExtraSpaces(valueString) {
  return String(valueString).split(' ').filter(value => value).join(' ');
}

module.exports = convertToObject;
