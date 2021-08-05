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
  return sourceString.split(';').map(prop => prop.trim())
    .filter(prop => prop.length)
    .map(pair => pair.split(':').map(el => el.trim()))
    .reduce((obj, el) => Object.assign(obj, { [el[0]]: el[1] }), {});
}

module.exports = convertToObject;
