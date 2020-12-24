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
  const result = {};
  const stringSplitting = sourceString.split(';');
  const arrOfValues = stringSplitting.map(element => {
    return element.split(':');
  });
  const withoutSpace = arrOfValues.map(bl =>
    bl.map(el => el.trim(''))).filter(el => el[0] !== '');

  withoutSpace.forEach(el => {
    result[el[0]] = el[1];
  });

  return result;
}

module.exports = convertToObject;
