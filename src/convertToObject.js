'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  }

  const modifiedStr = sourceString
    .trim()
    .split(';')
    .map((item) => {
      return item.trim();
    });

  if (modifiedStr.length === 1) {
    const [key, value] = sourceString.trim().split(':');

    return {
      [key]: value.trim(),
    };
  }

  let result = {};

  modifiedStr.map((item, i) => {
    const arr = item.trim().split(':');

    if (arr[0].length !== 0) {
      const key = arr[0].trim();
      const value = arr[1] ? arr[1].trim() : '';

      result = {
        ...result,
        [key]: value,
      };
    }

    return item.split(':');
  });

  return result;
}

module.exports = convertToObject;
