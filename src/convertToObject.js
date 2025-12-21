'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertStyle = {};

  sourceString.split(';').forEach((line) => {
    const lineTrim = line.trim();

    if (lineTrim.length === 0) {
      return;
    }

    const [key, value] = lineTrim.split(':');

    if (key && value) {
      convertStyle[key.trim()] = value.trim();
    }
  });

  return convertStyle;
}

module.exports = convertToObject;
