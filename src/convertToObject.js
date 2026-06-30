'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, rule) => {
    if (!rule.trim()) {
      return stylesObject;
    }

    const index = rule.indexOf(':');

    if (index === -1) {
      return stylesObject;
    }

    const property = rule.slice(0, index).trim();
    const value = rule.slice(index + 1).trim();

    return {
      ...stylesObject,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
