'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS styles are keys
 * and values are the values of related CSS styles
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
const makeAnObject = (prev, [key, ...value]) => (
  {
    ...prev,
    [key]: value.join(' '),
  }
);

function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const objectOfClasses = styles
    .map(style => style.split(':').map(el => el.trim()))
    .filter(style => style.length >= 2)
    .reduce(makeAnObject, {});

  return objectOfClasses;
}

module.exports = convertToObject;
