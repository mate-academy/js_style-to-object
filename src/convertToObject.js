'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((prev, cur) => {
    const [prop, val] = cur.split(':');

    return { ...prev, [prop.trim()]: val?.trim() };
  }, {});
}

module.exports = convertToObject;
