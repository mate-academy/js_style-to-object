'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newString = sourceString
    .split(';')
    .map((item) => item.trim())
    .join(':')
    .split(':')
    .map((item) => item.trim())
    .filter((item) => item !== '' && item !== "'");

  const stylesObject = newString.reduce((acc, item, index) => {
    if (index % 2 === 0) {
      acc[item] = newString[index + 1];
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
