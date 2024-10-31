'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringsArr = sourceString.split(';');
  const res = {};

  stringsArr.forEach((str) => {
    const clSrt = str.trim();

    const ruleParam = clSrt.split(':');
    if (ruleParam && ruleParam.length === 2) {
      res[ruleParam[0].trim()] = ruleParam[1] ? ruleParam[1].trim() : '';
    }
  });

  return res;
}

module.exports = convertToObject;
