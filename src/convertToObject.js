/* eslint-disable max-len */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalizedString = sourceString
    .split(';')
    .map((child) => child.trim())
    .filter(params => params.length > 1);

  const result = normalizedString.reduce((prev, child) => {
    const [key, value] = child
      .split(':')
      .map((a) => a.trim());

    return {
      ...prev,
      [key]: value,
    };
  }, {});

  return result;
}

module.exports = convertToObject;
