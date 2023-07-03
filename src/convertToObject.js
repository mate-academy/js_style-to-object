'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stylesArray = sourceString.split('\n');
  const trimmed = [];

  stylesArray.forEach((style) => {
    trimmed.push(style.trim().replace(';', ''));
  });

  const cleared = [];

  trimmed.forEach((e) => {
    if (e) {
      cleared.push(e.split(':'));
    }
  });

  const final = cleared.reduce((res, [key, value]) => {
    const trimmedKey = key.trim();
    const trimmedValue = value.trim();

    return {
      ...res,
      [trimmedKey]: trimmedValue,
    };
  }, {});

  return final;
}

module.exports = convertToObject;
