'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const noEmptyLines = sourceString
    .split(';')
    .map((line) => {
      return line.trim();
    })
    .filter((item) => item.length > 0);

  const convertToObj = noEmptyLines.reduce((prev, item) => {
    const [key, value] = item.split(':');

    const newKey = key.trim();
    const newValue = value.trim();

    prev[newKey] = newValue;

    return prev;
  }, {});

  return convertToObj;
}

module.exports = convertToObject;
