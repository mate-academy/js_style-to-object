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
  const cssClass = {};

  const splitedProperties = sourceString
    .split(';')
    .map(el => el.split(':'))
    .map(x => x.map(y => y.trim()));

  for (const item of splitedProperties) {
    if (item.length > 1) {
      cssClass[item[0]] = item[1];
    }
  }

  return cssClass;
}

module.exports = convertToObject;
