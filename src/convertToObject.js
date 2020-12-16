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
  const stringArray = sourceString.split(';');
  const stylesObject = {};

  const arr = stringArray.map(n => n.trim())
    .filter(n => n.length > 0).map(m => m.split(':'));

  arr.forEach(n => {
    stylesObject[n[0].trim()] = n[1].trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
