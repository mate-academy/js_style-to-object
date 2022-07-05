'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';').map(key =>
    key.split(':').map(key1 => key1.trim())).reduce((key, value) => {
    key[value[0]] = value[1];
    delete key[value];

    return key;
  }, {});

  return result;
}

module.exports = convertToObject;
