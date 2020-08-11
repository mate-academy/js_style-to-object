'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *

 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObj = {};

  const splitString = sourceString.replace(/\s+/g, ' ').split(';');

  splitString.forEach(elem => {
    const [key, value] = elem
      .replace(/^\s+/g, '')
      .split(':');

    if (key.length !== 0 && value !== 0) {
      styleObj[key.trim()] = value.trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
