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
  return sourceString.split('\n') // array key-value
    .map(row => row.split(':')) // array [key,value]
    .filter(rule => rule.length === 2) // remove excess
    .map(([prop, value]) => // remove space and semicolon
      [prop.trim(), value.replace(';', '').trim()]
    )
    .reduce((convertList, [prop, value]) => ( // make object
      {
        ...convertList, ...{ [prop]: value },
      }
    ), {});
}

module.exports = convertToObject;
