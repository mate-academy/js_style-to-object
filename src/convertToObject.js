'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  let runningStr = '';

  sourceString.split(/\r?\n/).forEach(el => {
    runningStr = '';

    if (el.length) {
      runningStr = el.split(':');

      if (runningStr.length < 2) {
        return;
      }

      result[runningStr[0].trim()] = runningStr[1]
        .substring(0, runningStr[1].length - 1).trim();
    }
  });

  return result;
}

module.exports = convertToObject;
