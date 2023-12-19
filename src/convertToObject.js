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
  const rows = sourceString
    .split(';\n')
    .map(row => splitRow(row));

  const styleObj = rows.reduce((obj, row) => {
    if (row.length === 1) {
      return { ...obj };
    }

    return {
      ...obj, [row[0]]: row[1],
    };
  }, {});

  return styleObj;
}

function splitRow(row) {
  return row
    .split(': ')
    .map(word => word.trim());
}

module.exports = convertToObject;
