'use strict';

/**
 * Implement convertToObject function:
 *

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalize = sourceString.split(';').map(a => {
    return a.split(':').map(s => s.trim()).join(':');
  }).filter(a => a.length > 1);

  const result = {};

  normalize.map(a => {
    const [key, value] = a.split(':');

    result[key] = value;

    return a;
  });

  return result;
}

module.exports = convertToObject;
