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
  const objectForStyles = {};
  const array = [];
  const arrSplitFirstLevel = sourceString.split(';');

  for (const words of arrSplitFirstLevel) {
    const arrSplitSecondLevel = words.split(':');

    if (arrSplitSecondLevel[0] !== undefined
      && arrSplitSecondLevel[1] !== undefined) {
      const propertyName = arrSplitSecondLevel[0].trim();
      const propertyValue = arrSplitSecondLevel[1].trim();

      array.push(propertyName);
      array.push(propertyValue);
    }
  }

  const filtered = array.filter(Boolean);

  for (let i = 0; i < filtered.length; i += 2) {
    objectForStyles[filtered[i]] = filtered[i + 1];
  }

  return objectForStyles;
}

module.exports = convertToObject;
