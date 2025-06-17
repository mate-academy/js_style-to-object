'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const statements = sourceString
    .split(';')
    .map((statement) => statement.trim())
    .filter((statement) => statement.length > 0);

  const styleObject = {};

  statements.forEach((statement) => {
    const [key, value] = statement.split(':');

    styleObject[key.trim()] = value.trim();
  });

  return styleObject;
}

module.exports = convertToObject;
