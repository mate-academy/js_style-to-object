'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArr = sourceString.split(';');

  const newNewArr = newArr.map((el) => el.split(':'));

  const trimmedArr = newNewArr.map((pair) => pair.map((el) => el.trim()));

  const newObj = trimmedArr.reduce((acc, pair) => {
    if (pair.length === 2 && pair[0]) {
      acc[pair[0]] = pair[1];
    }

    return acc;
  }, {});

  return newObj;
}

module.exports = convertToObject;
