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
  const stringArr = sourceString.split(';')
    .map(el => el.trim())
    .filter(el => el.length > 1);

  const arr = stringArr.map(el => {
    return el.split('')
      .filter(str => str !== ':')
      .join('')
      .split(' ')
      .filter(item => item !== '');
  });

  const obj = arr.reduce((acc, el) => {
    const [key, ...values] = el;

    return {
      ...acc,
      [key]: values.join(' '),
    };
  }, {});

  return obj;
}

module.exports = convertToObject;
