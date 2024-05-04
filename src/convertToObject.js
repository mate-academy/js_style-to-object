'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';').reduce((prev, item) => {
    const declarations = item.split(':').map((key) => key.trim());

    prev[declarations[0]] = declarations[1];

    return prev;
  }, {});

  return result;
}
module.exports = convertToObject;
