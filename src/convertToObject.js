'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let result = sourceString.split(';').map((arr) => arr.split(':'));

  result = result.map(
    (subArray) => subArray.map((string) => string.trim()),
    // eslint-disable-next-line prettier/prettier
  );

  result = result.filter((subArray) => subArray.length > 1);

  result = result.reduce(
    (aggr, [key, value]) => ({ ...aggr, [key]: value }),
    {},
  );

  return result;
}

module.exports = convertToObject;
