'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(trimItem)
    .filter((arrayItem) => arrayItem !== '')
    .map((styleRuleString) => styleRuleString.split(':').map(trimItem))
    .reduce(
      (previousObject, [key, value]) => ({ ...previousObject, [key]: value }),
      {},
    );
}

function trimItem(item) {
  return item.trim();
}

module.exports = convertToObject;
