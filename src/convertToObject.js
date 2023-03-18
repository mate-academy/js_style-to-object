'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};
  const stringInArray = sourceString.split('\n');
  const filterArray = stringInArray.filter(element =>
    element !== '' && element.trim() !== ';');
  const divideIntoTwoParts = filterArray.map(element => element.split(':'));

  for (const part of divideIntoTwoParts) {
    const valueWithoutSemicolon = part[1].replace(';', '');

    const trimKey = part[0].trim();
    const trimValue = valueWithoutSemicolon.trim();

    object[trimKey] = trimValue;
  }

  return object;
}

module.exports = convertToObject;
