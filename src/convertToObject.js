'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  let key = '';
  let value = '';

  const splitAllstring = sourceString.split(';');

  for (const block of splitAllstring) {
    const splitBlock = block.split(':');

    key = splitBlock[0];
    value = splitBlock[1];

    if (value === undefined) {
      continue;
    }
    resultObject[key.trim()] = value.trim();
  }

  return resultObject;
}

module.exports = convertToObject;
