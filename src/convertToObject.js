'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keys = sourceString
    .match(/.{0,}?:/g)
    .map((x) => {
      return x.replace(/\s/g, '').replace(/:/g, '');
    }
    );

  const values = sourceString
    .match(/:.{0,}?;/g)
    .map((x) => {
      return x.replace(/:/g, '')
        .replace(/\s{2,}/g, '')
        .replace(/^\s/g, '')
        .replace(/;/g, '');
    }
    );

  const objectStyles = {};
  for (let i = 0; i < keys.length; i++) {
    objectStyles[keys[i]] = values[i];
  }
  return objectStyles;
}

module.exports = convertToObject;
