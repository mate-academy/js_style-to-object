'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const attributes = sourceString
    .replace(/\s\s+/g, '')
    .replace('\n', '')
    .split(';')
    .filter(n => n)
    .slice(0, -1);

  const style = [];
  let value = [];

  attributes.forEach(element => style
    .push(element
      .split(':')[0]));

  attributes.forEach(element => value
    .push(element
      .split(':')[1]));

  value = value.map(element => element.trim());

  const convertedOBject = {};

  style.forEach((element, index) => {
    convertedOBject[element] = value[index];
  });

  return convertedOBject;
}

module.exports = convertToObject;
