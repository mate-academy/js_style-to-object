'use strict';

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
  // write your code here
  const arr = sourceString.split(';').map((item) =>
    item
      .trim()
      .split(':')
      .filter((element) => element !== '')
  );

  const convertedObj = arr.reduce((currentObj, item) => {
    if (item && item.length) {
      currentObj[item[0].trim()] = item[1].trim();
    };

    return currentObj;
  }, {});

  return convertedObj;
  // for (const name of arr) {
  //   if (name[0] && name[1]) {
  //     convertedObj[name[0].trim()] = name[1].trim();
  //   }
  // }

  // return convertedObj;
}

module.exports = convertToObject;
