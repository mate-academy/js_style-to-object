'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayWithStyles = sourceString.split(';')
    .map((el) => el.trim());
  const resultObject = {};

  for (const elem of arrayWithStyles) {
    const pair = elem.split(':').map((el) => el.trim());
    resultObject[pair[0]] = pair[1];
  }

  return resultObject;
}

module.exports = convertToObject;
