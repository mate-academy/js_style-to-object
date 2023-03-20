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
  const properties = {};
  const strings = sourceString
    .split(';')
    .map(el => el.split(':'));

  const filteredStrings = strings.filter(el => el.length === 2);

  filteredStrings.forEach(el => {
    const property = el[0].trim();
    const value = el[1].trim();

    properties[property] = value;
  });

  return properties;
}

module.exports = convertToObject;
