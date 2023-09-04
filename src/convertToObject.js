'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyleObject = {};
  const styleStringsArray = sourceString
    .replace(/(\r\n|\n|\r)/gm, '')
    .split(';');

  styleStringsArray.forEach((str) => {
    const arrayOfStrings = str.split(':');

    if (arrayOfStrings[1] !== undefined) {
      arrayOfStrings[0] = arrayOfStrings[0].trim();
      arrayOfStrings[1] = arrayOfStrings[1].trim();

      cssStyleObject[arrayOfStrings[0]] = arrayOfStrings[1];
    }
  });

  return cssStyleObject;
}

module.exports = convertToObject;
