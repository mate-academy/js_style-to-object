'use strict';

/**
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
    .forEach((elem) => { styleObj[elem[0]] = elem[1].trim(); });

  return styleObj;
}

module.exports = convertToObject;
