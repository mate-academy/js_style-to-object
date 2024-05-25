'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const rows = sourceString.split(';').filter(Boolean);

  for (const row of rows) {
    const [key, value] = row.split(':').map((item) => item.trim());

    styleObject[key] = value;
  }

  return styleObject;
}

module.exports = convertToObject;
