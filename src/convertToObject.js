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
  const resultObject = {};
  let propArray = sourceString.split(';');

  propArray = propArray.map(
    prop => prop.slice(
      prop.lastIndexOf('\n') + 1, prop.length));
  propArray = propArray.map(prop => prop.trim());
  propArray = propArray.filter(prop => prop !== '');

  propArray.forEach(function(prop) {
    resultObject[(prop.split(':')[0]).trim()] = (prop.split(':')[1]).trim();
  });

  return resultObject;
}

module.exports = convertToObject;
