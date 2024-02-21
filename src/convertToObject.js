'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString
    .split(';')
    .map(
      (rule) => rule.split(':').map((ruleItem) => ruleItem.trim()),
    )
    .filter(([elem]) => elem !== '');

  return arr.reduce((obj, [key, value]) => {
    obj[key] = value;

    return obj;
  }, {});
}

module.exports = convertToObject;
