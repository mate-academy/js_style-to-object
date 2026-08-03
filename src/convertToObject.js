'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  sourceString.split(';').forEach(item => item.trim().split(':').forEach(i => i.trim()));
}

module.exports = convertToObject;
