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
  const arrOfStrings = sourceString.split(';')
    .map(item => item.split(':'));

  const objesctOfSelectors = {};

  arrOfStrings.forEach(elem => {
    if (elem.length === 2) {
      objesctOfSelectors[elem[0].trim()] = elem[1].trim();
    }
  });

  return objesctOfSelectors;
}

module.exports = convertToObject;
