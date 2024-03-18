'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString
    .split(';')
    .map((rule) => rule.split(':').map((part) => part.trim()))
    .filter((rule) => rule[0] && rule[1]);

  const rulesObject = rules.reduce((prev, current) => {
    return {
      ...prev,
      [current[0]]: current[1],
    };
  }, {});

  return rulesObject;
}

module.exports = convertToObject;
