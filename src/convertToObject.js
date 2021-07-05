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
  const semicolon = sourceString.split(';');
  const doublequote = semicolon.map(line => line.trim().split(':'));
  const filtred = doublequote.filter(value => value.length !== 1);

  filtred.forEach(couple => {
    couple[0] = couple[0].trim();
    couple[1] = couple[1].trim();
  });

  return Object.fromEntries(filtred);
}

module.exports = convertToObject;
