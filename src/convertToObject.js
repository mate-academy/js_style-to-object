'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').filter(item => item.trim() != '').map(item => item.split(':').trim());
}

module.exports = convertToObject;
