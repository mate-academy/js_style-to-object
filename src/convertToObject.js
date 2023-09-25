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
  const styles = {};
  const normalizeValues = sourceString
    .split('\n')
    .filter((item) => item !== '')
    .map((item) =>
      item
        .split(' ')
        .filter((value) => value !== '' && value !== ';' && value !== ':')
    );

  normalizeValues.forEach((item) => {
    let key = item.slice(0, 1).join('');
    let value = item.slice(1).join(' ');

    if (key[key.length - 1] === ':') {
      key = key.slice(0, -1);
    }

    if (value[value.length - 1] === ';') {
      value = value.slice(0, -1);
    }

    if (item.length > 0) {
      styles[key] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
