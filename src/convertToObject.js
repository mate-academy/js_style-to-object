'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * gi(see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectSplit = sourceString.split(';');
  const trimArr = objectSplit.map(item => item.trim());
  const splitArr = trimArr.map(item => item.split(' '));
  const filterArr = splitArr.map(item => item.filter(word => word !== ''));
  const joinArr = filterArr.map(item => item.join(' '));
  const cleanArr = joinArr.filter(item => item !== '');
  const newArr = cleanArr.map(str => str.replace(' :', ':'));

  const obj = {};

  newArr.forEach((item) => {
    const [key, value] = item.split(': ');

    obj[key] = value;
  });

  return obj;
};

module.exports = convertToObject;
