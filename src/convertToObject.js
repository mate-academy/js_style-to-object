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
  const EXPECTED_OBJECT = {};
  let key = '';
  let value = '';

  for (let i = 0; i < sourceString.length; i++) {
    if (sourceString[i] === ' '
      || sourceString[i] === ';'
      || sourceString[i] === '\n') {
      continue;
    }

    if (sourceString[i] !== ':') {
      key = key + sourceString[i];
    } else {
      for (let j = i + 2; j < sourceString.length; j++) {
        if (sourceString[j] === ';' || j === (sourceString.length - 1)) {
          EXPECTED_OBJECT[key] = value;

          key = '';
          value = '';
          i = j + 1;

          break;
        }

        if (sourceString[j] === '\n') {
          break;
        }

        if ((sourceString[j] === ' ' && value === '')
          || (sourceString[j] === ' ' && sourceString[j + 1] === ' ')
          || (sourceString[j] === ' ' && sourceString[j + 1] === ';')) {
          continue;
        }

        value = value + sourceString[j];
      }
    }
  }

  return EXPECTED_OBJECT;
}

module.exports = convertToObject;
