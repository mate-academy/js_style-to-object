'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const sourceStringTrim = sourceString.trim();
  const tabFromSourceString = sourceStringTrim.split(';');

  for (let i = 0; i < tabFromSourceString.length; i++) {
    const tabProperty = tabFromSourceString[i].split(':');

    if (tabProperty.length === 2) {
      const key = tabProperty[0].trim();
      const value = tabProperty[1].trim();

      if (key && value) {
        obj[key] = value;
      }
    }
  }

  return obj;
}

module.exports = convertToObject;
