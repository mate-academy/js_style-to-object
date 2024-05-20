'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrSoursString = sourceString;
  const result = {};

  for (let i = 0; i < arrSoursString.length; i++) {
    if (arrSoursString[i] === ':') {
      result[`${suchKey(arrSoursString, i)}`] = such(arrSoursString, i);
    }
  }

  return result;
}

function such(arr, index) {
  let word = '';

  for (let i = index; i < arr.length; i++) {
    if (arr[i] === '\n') {
      word = word + arr[i];
    }

    if ('abcdefghijklmnopqrstuvwxyz- ,1234567890!.#%()/'.includes(arr[i])) {
      word = word + arr[i];
    }

    if (arr[i] === ';' || i === arr.length - 1) {
      return word.trim();
    }
  }
}

function suchKey(arr, index) {
  let word = '';

  for (let i = index; i >= 0; i--) {
    if ('abcdefghijklmnopqrstuvwxyz- ,1234567890!.#%()/'.includes(arr[i])) {
      word = word + arr[i];
    }

    if (arr[i] === ';' || i === 0) {
      return word.trim().split('').reverse().join('');
    }
  }
}

module.exports = convertToObject;
