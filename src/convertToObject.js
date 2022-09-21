'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleLines = sourceString
    .split(';')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  const rules = styleLines.map(line => {
    const rule = line.split(':');

    return {
      property: rule[0].trim(),
      value: rule[1].trim(),
    };
  });

  return rules.reduce((total, current) => ({
    ...total,
    [current.property]: current.value,
  }), {});
}

module.exports = convertToObject;
