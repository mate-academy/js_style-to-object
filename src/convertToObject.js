'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const mappedDate = sourceString
    .split(';')
    .map(pair => pair.split(':'))
    .filter(pair => pair.length === 2)
    .map(pair => pair.map(part => part.trim()));

  const inObject = mappedDate.map((part) => ({
    [part[0]]: part[1],
  }));

  const concatFrom = Object.assign({}, ...inObject);

  return concatFrom;
}

module.exports = convertToObject;
