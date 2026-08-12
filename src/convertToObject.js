'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rulesNotFormated = sourceString.split(';');

  const rulesNFKV = rulesNotFormated.map((el) => el.trim().split(':'));

  const rulesFKV = rulesNFKV.map((arr) => arr.map((el) => el.trim('')));

  const removeSpaces = rulesFKV.filter((arr) => arr.some((el) => el !== ''));

  return removeSpaces.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});
}

module.exports = convertToObject;
