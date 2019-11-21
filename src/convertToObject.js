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
  const obj = {};
  const fixed = sourceString.replace(/[\s]+/g, ' ')
    .split(';')
    .filter(elem => elem !== ' ');

  fixed.map(elem => {
    const divided = elem.split(':');
    obj[divided[0].trim()] = divided[1].trim();
  });
  return obj;
}

module.exports = convertToObject;
