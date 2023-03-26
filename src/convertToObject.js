'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayWithStyles = sourceString.split(';')
    .map(properties => properties.split(':')
      .map(element => element.trim()))
    .filter(x => x.length > 1);

  return arrayWithStyles.reduce((object, value) =>
    ({
      ...object,
      [value[0]]: value[1],
    }), 0);
}

module.exports = convertToObject;
