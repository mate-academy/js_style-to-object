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
  const lines = sourceString.split(';').map(line => {
    const splittedLine = line.split(':');
    const lineName = splittedLine[0].trim() || '_____toRemove';
    let lineValue = splittedLine[1] || '';

    lineValue = lineValue.trim();

    return [lineName, lineValue];
  });

  const style = {};

  lines.forEach(styleLine => (style[styleLine[0]] = styleLine[1]));

  delete style._____toRemove;

  return style;
}

module.exports = convertToObject;
