'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const arrayOfStyles = sourceString
    .split('\n')
    .join(' ')
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '');

  arrayOfStyles.forEach((item) => {
    const colon = item.indexOf(':');

    if (colon !== -1) {
      const key = item.slice(0, colon).trim();
      let value = item.slice(colon + 1).trim();

      if (value.indexOf(',') !== -1) {
        value = value
          .split(',')
          .map((itemValue) => itemValue.trim())
          .join(',\n          ');
      }
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
