'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stringSplitted = sourceString.split(';');
  const stringMapped = stringSplitted.map((field) => field.trim());
  const stringFiltered = stringMapped.filter((field) => field !== '');

  const stringDivided = stringFiltered.map((field) => {
    return field.split(':').map((part) => part.trim());
  });

  const resultObj = stringDivided.reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value,
    };
  }, {});

  return resultObj;
}

module.exports = convertToObject;
