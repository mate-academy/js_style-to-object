'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesString = sourceString
    .split(';')
    .filter(value => value.includes(':'))
    .map(property => property.trim());

  const createStylesKeyPairs = (allItems, item) => {
    const key = {
      [item.slice(0, item.indexOf(':')).trim()]:
      item.slice(item.indexOf(':') + 1).trim(),
    };

    Object.assign(allItems, key);

    return allItems;
  };

  return stylesString.reduce(createStylesKeyPairs, {});
}

module.exports = convertToObject;
