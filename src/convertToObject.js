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
  const obj = {};
  sourceString.replace(/\n/g, '')
    .replace(/\s+/g, ' ')
    .split(';')
    .map(styleAndPlops => styleAndPlops.trim()
      .replace(/ :/, ':'))
    .filter(spaces => spaces !== '')
    .map(styleAndPlops => styleAndPlops.split(':'))
    .forEach(function(styleAndPlops) {
      obj[styleAndPlops[0]] = styleAndPlops[1].trim();
    });

  return obj;
}

module.exports = convertToObject;
