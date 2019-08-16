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
  const cssPropertyObj = {};

  const sortedCssPropsArr = sourceString
    .replace(/\n {2}/g, '')
    .trim()
    .split(';')
    .filter(notEmptyString => notEmptyString);

  for (const element of sortedCssPropsArr) {
    const property = element.split(':');
    cssPropertyObj[property.splice(0, 1)] = property.join(':').trim();
  }

  return cssPropertyObj;
}
module.exports = convertToObject;
