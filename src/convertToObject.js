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
  return sourceString.split(';')
    .map(property => property.trim())
    .filter(property => property.length)
    .map(pair => pair.split(':').map(pairElement => pairElement.trim()))
    .reduce((styleObject, pair) => {
      return Object.assign(styleObject, { [pair[0]]: pair[1] });
    }, {});
}

module.exports = convertToObject;
