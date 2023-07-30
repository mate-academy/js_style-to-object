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
  const elements = [];
  const arrSplitFirstLevel = sourceString.split(';');

  for (const words of arrSplitFirstLevel) {
    const [name, value] = words.split(':');

    if (name !== undefined && value !== undefined) {
      const propertyName = name.trim();
      const propertyValue = value.trim();

      elements.push(propertyName, propertyValue);
    }
  }

  const filtered = elements.filter(Boolean);

  for (let i = 0; i < filtered.length; i += 2) {
    objectForStyles[filtered[i]] = filtered[i + 1];
  }

  return objectForStyles;
}

module.exports = convertToObject;
