/* eslint-disable no-console */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitByProperty = sourceString.split(';').filter(Boolean);

  const result = splitByProperty.reduce((acc, el) => {
    const [key, value] = el.split(':').map((word) => word.trim());

    if (!key) {
      return acc;
    }

    acc[key] = value || '';

    return acc;
  }, {});

  return result;
}

convertToObject('    position: fixed;      ');

module.exports = convertToObject;
