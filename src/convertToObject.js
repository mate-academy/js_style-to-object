'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceSplit = sourceString.split(';');
  const finallSorting = {};

  sourceSplit.forEach((element) => {
    const [key, value] = element.split(':');

    if (key && value) {
      finallSorting[key.trim()] = value.trim();
    }
  });

  return finallSorting;
}

module.exports = convertToObject;
