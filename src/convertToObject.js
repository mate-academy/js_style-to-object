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
  const styles = {};

  sourceString
    .split(';\n')
    .map(line => line.trim())
    .filter(line => {
      return line !== '' && line !== ';';
    })
    .map(part => {
      return part
        .split(':')
        .map(str => {
          return str.trim();
        });
    })
    .forEach(prop => {
      styles[prop[0]] = prop[1];
    });

  return styles;
}

module.exports = convertToObject;
