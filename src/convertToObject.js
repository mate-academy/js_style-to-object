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
  const objectOfProps = {};
  const arrOfProps = sourceString
    .split(';')
    .filter(item => item.includes(':'));

  arrOfProps.forEach((current) => {
    const [key, value] = current.split(':');

    objectOfProps[key.trim()] = value.trim();
  });

  return objectOfProps;
}

module.exports = convertToObject;
