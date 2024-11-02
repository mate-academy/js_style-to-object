'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanedString = sourceString
    .replace(/^\s*[\r\n]/gm, '')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*:\s*/g, ': ')
    .trim();

  const keyValuePairs = cleanedString
    .split(';')
    .filter((elem) => elem.length > 0);

  return keyValuePairs.reduce((acc, val) => {
    const properties = val.split(':');

    if (properties.length !== 2) {
      return acc;
    }

    const key = properties[0].trim();
    const value = properties[1].trim().replace(';', '');

    acc[key] = value;

    return acc;
  }, {});
}

module.exports = convertToObject;
