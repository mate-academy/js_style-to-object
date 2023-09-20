'use strict';

const normalize = (styleString) => {
  const styles = styleString.replace(/(\n)|(:)/g, '').split(';');
  const result = [];

  for (const style of styles) {
    result.push(style.split(' '));
  }

  return result
    .map(x => x.filter(a => a))
    .filter(b => b.length !== 0);
};

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
  return normalize(sourceString).reduce((accumulator, string) => {
    const [property, ...values] = string;

    return {
      ...accumulator,
      [property]: values.join(' '),
    };
  }, {});
}

module.exports = convertToObject;
