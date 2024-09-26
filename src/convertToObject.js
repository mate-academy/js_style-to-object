'use strict';

/**
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
