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
  return sourceString
    .split(';')
    .map(s => s.trim())
    .filter(e => e)
    .map(s => s.split(':').map(props => props.trim()))
    .reduce((obj, e) => ({
      ...obj,
      [e[0]]: e[1],
    }), {});
}

module.exports = convertToObject;
