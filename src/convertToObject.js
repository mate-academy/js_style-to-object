'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((prev, cur) => {
    const [prop, val] = cur.split(':');

    prev[prop.trim()] = val?.trim();

    return prev;
  }, {});
}

module.exports = convertToObject;
