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
  const obj = {};
  const mass = [];
  const arrSplitFirstLevel = sourceString.split(';');

  for (const words of arrSplitFirstLevel) {
    const arrSplitSecondLevel = words.split(':');

    for (const values of arrSplitSecondLevel) {
      const cut = values.trim();

      mass.push(cut);
    }
  }

  const filtered = mass.filter(function(elem) {
    if (elem !== '') {
      return true;
    } else {
      return false;
    }
  });

  for (let i = 0; i < filtered.length; i += 2) {
    obj[filtered[i]] = filtered[i + 1];
  }

  return obj;
}

module.exports = convertToObject;
