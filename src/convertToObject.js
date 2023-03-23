'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString
    .split(';')
    .map(property => property.trim())
    .filter(property => property !== '');

  const style = properties.reduce((result, property) => {
    const [key, value] = property
      .trim()
      .split(/\s*:\s*/);

    result[key] = value;

    return result;
  }, {});

  return style;
}

module.exports = convertToObject;
