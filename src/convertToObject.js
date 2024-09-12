'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const filteredLines = sourceString.replace(/;/g, '').split('\n')
    .map(line => line.split(':'))
    .filter(line => line.length === 2);

  filteredLines.forEach(line => {
    line[0] = line[0].trim();
    line[1] = line[1].trim();
  });

  return filteredLines.reduce((config, [key, value]) => {
    return {
      ...config,
      [key]: value,
    };
  }, {});
}

module.exports = convertToObject;
