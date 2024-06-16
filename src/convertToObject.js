'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const result = {};
  const splited = sourceString.split(';');

  splited.forEach(item => {
    const [key, value] = item.split(':').map(x => x.trim());

    result[key] = value;
  })


  return result;
}

module.exports = convertToObject;
