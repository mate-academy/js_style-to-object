'use strict';

/**
  * Implement convertToObject function:
  *
  * Function takes a string with styles (see an example in
  * [stylesString.js](./stylesString.js))
  * and returns an object where CSS properties are keys
  * and values are the values of related CSS properties
  * (see an exampl in [test file](./convertToObject.test.js))
  *
  * @param {string} sourceString
  *
  * @return {object}
*/

function convertToObject(sourceString) {
  // write your code here
  const sourceObject = {};
  const line = sourceString.split('\n').filter(x => x.length > 3);

  for (let i = 0; i < line.length; i++) {
    line[i] = line[i].slice(0, -1);
    line[i] = line[i].trim();

    const lineSort = line[i].split(':');

    sourceObject[lineSort[0].trim()] = lineSort[1].trim();
  }

  return sourceObject;
}

module.exports = convertToObject;
