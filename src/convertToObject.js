'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((declaration) => {
    const [key, ...valueParts] = declaration.split(':');

    if (!key || valueParts.length === 0) {
      return;
    }

    const trimmedKey = key.trim();
    const value = valueParts.join(':').trim();

    if (trimmedKey && value) {
      result[trimmedKey] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
