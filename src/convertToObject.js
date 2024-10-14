'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObj = {};

  const sourceArray = sourceString
    .split(';')
    .filter((style) => style.trim() !== '');

  sourceArray.forEach((elem) => {
    const startValueIndex = elem.indexOf(':');

    if (startValueIndex !== -1) {
      const propertyName = elem.slice(0, startValueIndex).trim();
      const value = elem.slice(startValueIndex + 1).trim();

      if (propertyName && value) {
        convertedObj[propertyName] = value;
      }
    }
  });

  return convertedObj;
}

module.exports = convertToObject;
