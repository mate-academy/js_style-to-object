'use strict';

// const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splited = sourceString.split(';');
  const arr = splited.reduce((accum, item) => {
    return [...accum, item.replace('\n', '').trim()];
  }, []);

  const arrNormalized = arr.map((item) => {
    if (item.length > 0) {
      return item.trim().split(':');
    }
  });
  const arrNormalizedFull = [];

  arrNormalized.forEach((item) => {
    if (item) {
      const subArray = item.map((el) => el.trim());

      arrNormalizedFull.push(subArray);
    }
  });

  const obj = arrNormalizedFull.reduce((accum, item) => {
    return {
      ...accum,
      [item[0]]: item[1],
    };
  }, {});

  return obj;
}

module.exports = convertToObject;
