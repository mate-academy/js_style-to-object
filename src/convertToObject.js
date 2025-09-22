'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedResult = sourceString.split(';');

  const filteredResult = splittedResult.filter((value) => value.includes(':'));

  return filteredResult
    .map((value) => ({
      [value.substring(0, value.indexOf(':')).trim()]: value
        .substring(value.indexOf(':') + 2)
        .trim(),
    }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});
}

module.exports = convertToObject;
