'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrStrings = sourceString.split(';')
    .map(el => el.split(':'));
  const styleObj = {};

  arrStrings.forEach(str => {
    const trimStrings = str.map(el => el.trim());

    const key = trimStrings[0];
    const value = trimStrings[1];

    if (key && value) {
      styleObj[key] = value;
    }
  });

  return styleObj;
}

module.exports = convertToObject;
