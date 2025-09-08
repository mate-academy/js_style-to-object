'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  }

  const rows = sourceString.split(';').filter((x) => x.trim() !== '');
  const objCSS = {};

  rows.forEach((x) => {
    const [key, value] = x.split(':');

    if (key && value) {
      objCSS[key.trim()] = value.trim();
    }
  });

  return objCSS;
}

module.exports = convertToObject;
