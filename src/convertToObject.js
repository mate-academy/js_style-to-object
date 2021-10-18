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
  const cssObject = {};
  const splitedSource = sourceString
    .split(';')
    .filter(element => element.includes(':'));

  for (const el of splitedSource) {
    const separator = el.indexOf(':');
    const value = el.slice(separator + 1).trim();
    const key = el.slice(0, separator).trim();

    cssObject[key] = value;
  }

  return cssObject;
};

module.exports = convertToObject;
