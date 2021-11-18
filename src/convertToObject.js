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
  const objOfStyles = {};
  const arrFromSting = sourceString
    .split(';')
    .map(x => x.split(':').map(e => e.trim()))
    .filter(i => i.length === 2);

  arrFromSting.forEach(el => {
    objOfStyles[el[0]] = el[1];
  });

  return objOfStyles;
}

module.exports = convertToObject;
