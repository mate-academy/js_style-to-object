'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const letters = sourceString.split('');
  let param = '';
  let paramValue = '';
  let toggle = 0;

  letters.forEach((value, index) => {
    if (value === ':') {
      toggle = 1;
    }

    if (value === ';' || index === letters.length - 1) {
      if (value !== ';') {
        paramValue += value;
      }

      if (param && paramValue) {
        result[param] = paramValue;
      }

      toggle = 0;
      paramValue = '';
      param = '';
    }

    if (
      value !== ' ' &&
      value !== ';' &&
      value !== ':' &&
      value !== '\n' &&
      value !== '\t' &&
      toggle === 0
    ) {
      param += value;
    }

    if (
      value !== ' ' &&
      value !== ';' &&
      value !== ':' &&
      value !== '\n' &&
      value !== '\t' &&
      toggle === 1
    ) {
      paramValue += value;
    }

    if (
      value === ' ' &&
      letters[index + 1] !== ' ' &&
      letters[index + 1] !== ';' &&
      letters[index + 1] !== ':' &&
      letters[index + 1] !== '\t' &&
      letters[index + 1] !== '\n' &&
      letters[index - 1] !== ' ' &&
      letters[index - 1] !== ';' &&
      letters[index - 1] !== ':' &&
      letters[index - 1] !== '\t' &&
      letters[index - 1] !== '\n'
    ) {
      switch (toggle) {
        case 0:
          param += value;
          break;

        case 1:
          paramValue += value;
          break;
      }
    }

    if (value === ',') {
      switch (toggle) {
        case 0:
          param += '\n\t';
          break;

        case 1:
          paramValue += '\n\t';
          break;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
