'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pair = sourceString.split(';').map((el) => el.trim().split(':'));
  const filteredPair = pair.filter((el) => el.length > 1);

  return filteredPair.reduce((accum, element) => {
    accum[element[0].trim()] = element[1].trim();

    return accum;
  }, {});
}

module.exports = convertToObject;
