'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfEntries = sourceString.split(';');
  const arrayOfKeysAndValues = arrayOfEntries.map((entry) => entry.split(':'));
  const trimmedArray = arrayOfKeysAndValues.map(function (item) {
    if (item.length === 2) {
      return [item[0].trim(), item[1].trim()];
    }

    return item;
  });
  const filtredArray = trimmedArray.filter((entry) => entry.length > 1);
  const result = filtredArray.reduce(function (prev, entry) {
    prev[entry[0]] = entry[1];

    return prev;
  }, {});

  return result;
}

module.exports = convertToObject;
