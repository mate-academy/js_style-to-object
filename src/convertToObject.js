'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const regex = /([^:;\s]+)[ \t\r\n]*:[ \t\r\n]*([\s\S]*?)[ \t\r\n]*(?:;|$)/g;

  let match;

  while ((match = regex.exec(sourceString)) !== null) {
    const property = match[1].replace(/^[ \t]+|[ \t]+$/g, '');
    const value = match[2].replace(/^[ \t]+|[ \t]+$/g, '');

    if (property) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
