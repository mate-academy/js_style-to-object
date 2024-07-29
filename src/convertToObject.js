'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringTrim = sourceString.trim();
  const tabFromSourceString = sourceStringTrim.split(';');

  return tabFromSourceString.reduce((objectFromSourceString, property) => {
    const tabProperty = property.split(':');

    if (tabProperty.length === 2) {
      const key = tabProperty[0].trim();
      const value = tabProperty[1].trim();

      if (key && value) {
        objectFromSourceString[key] = value;
      }
    }

    return objectFromSourceString;
  }, {});
}

module.exports = convertToObject;
