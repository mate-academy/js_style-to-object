'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString.split(';').forEach((el) => {
    const line = el.split(':');

    if (line.length === 2) {
      line[0] = line[0].trim();
      line[1] = line[1].trim();
      styles[line[0]] = line[1];
    }
  });

  return styles;
}

module.exports = convertToObject;
