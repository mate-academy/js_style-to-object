'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleLines = sourceString.trim().split('\n');
  const resultCss = {};

  styleLines.forEach(line => {
    const [key, value] = line.split(':').map(item => item.trim());

    if (key && value) {
      const processedValue = value.endsWith(';')
        ? value.slice(0, -1).trim()
        : value;

      resultCss[key] = processedValue;
    }
  });

  return resultCss;
}

module.exports = convertToObject;
