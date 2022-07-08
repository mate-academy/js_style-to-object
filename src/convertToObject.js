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
  // write your code here
  const arr = sourceString.split(';');

  const newArr = arr.map((item) => {
    return [item.slice(0, item.indexOf(':')).trim(),
      item.slice(item.indexOf(':') + 1).trim()];
  });

  const filterArr = newArr.filter((item) =>
    item[0].length > 0 && item[1].length);

  const callback = (obj, [firstArr, secondArr]) => {
    return {
      ...obj,
      [firstArr]: secondArr,
    };
  };
  const result = filterArr.reduce(callback, {});

  return result;
}

module.exports = convertToObject;
