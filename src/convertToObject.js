'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const newArray = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el.length > 0)
    .map((el) => {
      const [key, value] = el.split(':');

      return [key.trim(), value.trim()];
    });

  return newArray.reduce(
    (result, [key, value]) => ({ ...result, [key]: value }),
    {},
  );
}

module.exports = convertToObject;
