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
  const line = sourceString.replace(/\r?\n/g, '').split(';');
  const styleObj = {};
  for (let i = 0; i < line.length - 1; i++) {
    const [key, value] = line[i].split(':');
    styleObj[key.trim()] = value.trim();
  }
  return styleObj;
}

module.exports = convertToObject;
