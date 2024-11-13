'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const splited = sourceString.split(';');

  for (const item of splited) {
    if (item.trim() === '') {
      continue;
    }

    const [prop, value] = item.split(':');

    if (!prop || !value) {
      continue;
    }

    const trimmedProp = prop.trim();
    const trimmedValue = value.trim();

    result[trimmedProp] = trimmedValue;
  }

  return result;
}

module.exports = convertToObject;
