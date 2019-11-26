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
  const styleObj = {};
  sourceString.replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .split(';')
    .map(style => style.trim()
      .replace(/ :/, ':'))
    .filter(i => i !== '')
    .map(style => style.split(':'))
    .forEach(function(elem) {
      styleObj[elem[0]] = elem[1].trim();
    });

  return styleObj;
}

module.exports = convertToObject;
