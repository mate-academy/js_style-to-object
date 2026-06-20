'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimInit = sourceString.trim();

  const parts = trimInit.split(';');

  const result = {};

  for (const item of parts) {
    if (!item.trim()) {
      continue;
    }

    const [propried, ...valueParts] = item.split(':');
    const value = valueParts.join(':').trim();

    result[propried.trim()] = value;
  }

  return result;
}

module.exports = convertToObject;
