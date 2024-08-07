'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  let lines = sourceString.split('\n').filter((line) => line.trim());
  lines = lines.filter((line) => line.trim().length > 1);

  let key = '';
  let value = '';

  for (const line of lines) {
    const firstCharIndex = line.indexOf(line.trim());
    const colonIndex = line.indexOf(':');
    const semicolonIndex = line.indexOf(';');
    const currentKey = line.slice(firstCharIndex, colonIndex).trim();
    const currentValue = line.slice(colonIndex + 1, semicolonIndex).trim();
    // Update current key if the line has one
    if (colonIndex !== -1) {
      key = currentKey;
    }
    // a multi-line value with the terminal semicolon further afield
    if (semicolonIndex === -1) {
      value += currentValue;
    } else {
      value += currentValue;
      obj[key] = value;
      key = '';
      value = '';
    }
  }
  console.log(obj);
  return obj;
}

module.exports = convertToObject;
