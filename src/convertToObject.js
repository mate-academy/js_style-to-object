'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const clearedString = sourceString.trim().split(';');

  const sortedObjectOfStrings = clearedString.reduce((acc, string) => {
    const stringWithoutSymbols = string.trim().replace(/;$/, '');

    if (stringWithoutSymbols.includes(':')) {
      const [key, ...rest] = stringWithoutSymbols.split(':');
      const value = rest.join(':');

      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return sortedObjectOfStrings;
}

module.exports = convertToObject;
