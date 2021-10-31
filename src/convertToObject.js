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
  const cssObj = {};

  const splitedSource = sourceString.split(';').filter(el => el.includes(':'));
  
  for (const el of splitedSource) {
    const seperator = el.indexOf(':');
    const value = el.slice(seperator + 1).trim();
    const key = el.slice(0, seperator).trim();

    cssObj[key] = value;
  }

  return cssObj;
}

module.exports = convertToObject;
