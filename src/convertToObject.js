'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const separator = /\s*(?:;|$)\s*/;

  const tempResult1 = sourceString.split(separator)
    .filter(element => element.length > 0);

  const finalResult = tempResult1.reduce((prev, current) => {
    return {
      ...prev, [current.split(':')[0].trim()]: current.split(':')[1].trim(),
    };
  }, {});

  return finalResult;
}

module.exports = convertToObject;
