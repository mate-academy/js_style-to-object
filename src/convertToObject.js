'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arraySourceString = sourceString.split(';');
  const res = {};

  for (const el of arraySourceString) {
    const tempValue = el.split(':');

    if (tempValue.length !== 1) {
      res[tempValue[0].trim()] = tempValue[1].trim();
    }
  }

  return res;
}

module.exports = convertToObject;
