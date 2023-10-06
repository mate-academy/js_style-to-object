'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const filledLines = lines.filter(line => line.match(/[a-z]/));
  const keyValuePairs = filledLines.map(elem => elem.split(':'));
  const stylesObject = {};

  for (const pair of keyValuePairs) {
    stylesObject[pair[0].trim()] = pair[1].trim();
  }

  return stylesObject;
}

module.exports = convertToObject;
