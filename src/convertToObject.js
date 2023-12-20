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
  const KEYVALUE_SEPARATOR = ';';
  const KEY_VALUE_SEPARATOR = ':';

  const keyValueArr = filterStr(sourceString).split(KEYVALUE_SEPARATOR);
  const resultObj = {};

  keyValueArr.forEach(keyValue => {
    let [key, value] = keyValue.split(KEY_VALUE_SEPARATOR);

    if (value) {
      key = filterStr(key); value = clearValue(filterStr(value));
      resultObj[key] = value;
    }
  });

  return resultObj;
}

function filterStr(str) {
  const CHARS_TO_FILTER = ['\n'];
  const strArr = String(str).split();

  return strArr.filter(char => !CHARS_TO_FILTER.includes(char)).join().trim();
}

function clearValue(valueString) {
  return String(valueString).split(' ').filter(value => value !== '').join(' ');
}

module.exports = convertToObject;
