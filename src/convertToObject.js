'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(Item => Item.trim())
    .filter(Boolean)
    .reduce((newObj, Item) => {
      const colonIndex = Item.indexOf(':');
      if (colonIndex === -1) return newObj;

      const key = Item.slice(0, colonIndex).trim();
      const value = Item.slice(colonIndex + 1).trim();

      newObj[key] = value;
      return newObj;
    }, {});
}

module.exports = convertToObject;

