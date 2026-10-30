'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(/[;\n]/).reduce((acc, line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine.includes(':')) {
      return acc;
    }

    const [name, ...styles] = trimmedLine.split(':');

    acc[name.trim()] = styles.join(':').trim();

    return acc;
  }, {});
}

module.exports = convertToObject;
