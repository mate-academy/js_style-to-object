'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');

  const sourceObject = sourceArray.reduce((acc, curr) => {
    const entry = curr.split(':').map((item) => item.trim());

    acc[entry[0]] = entry[1];

    return acc;
  }, {});

  return sourceObject;
}

module.exports = convertToObject;
