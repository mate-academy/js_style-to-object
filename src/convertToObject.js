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

    let key;
    let value;

    lineTrim.split(':').forEach((partLine, index) => {
      const valueTrim = partLine.trim();

      if (index === 0) {
        key = valueTrim;
      }

      if (index === 1) {
        value = valueTrim;
      }
    });
    convertStyle[key] = value;
  });

  return convertStyle;
}

module.exports = convertToObject;
