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
  const styleObject = {};
  const styleProperties = sourceString
    .replace(/;/g, '').split('\n')
    .filter(i => i.includes(':')).map(i => i.split(':')
      .map(j => j.trim()).join(': '));

  styleProperties.forEach(i => {
    const element = i.split(':');
    const [key, value] = element;

    styleObject[key] = value.trim();
  });

  return styleObject;
}

module.exports = convertToObject;
