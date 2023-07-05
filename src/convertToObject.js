'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an
 * exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitStrings = sourceString.split(';');

  const splitLongStrings = splitStrings.filter(x => x.length > 4);

  const stringsSplitedColon = [];

  splitLongStrings.forEach(x => {
    const arrayCopy = x.split(':');

    stringsSplitedColon.push(arrayCopy[0]);
    stringsSplitedColon.push(arrayCopy[1]);
  });

  const stringsWithoutSpaces = stringsSplitedColon.map(x => {
    let i = 0;

    while (x.charAt(i) === ' ' || x.charAt(i) === '\n') {
      i++;
    }

    const y = x.slice(i);
    let j = y.length;

    while (y.charAt(j - 1) === ' ') {
      j--;
    }

    return y.slice(0, j);
  });

  const result = {};

  for (let i = 0; i < stringsWithoutSpaces.length - 1; i += 2) {
    result[stringsWithoutSpaces[i]] = stringsWithoutSpaces[i + 1];
  }

  return result;
}

module.exports = convertToObject;
