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
  const stylesString = sourceString.split(';')
    .filter(value => value.includes(':'))
    .map(property => property.trim());

  const callback = (allItems, item) => {
    return {
      ...allItems,
      [item.slice(0, item.indexOf(':')).trim()]:
        item.slice(item.indexOf(':') + 1).trim(),
    };
  };

  const stylesObject = stylesString.reduce(callback, {});

  return stylesObject;
}

module.exports = convertToObject;
