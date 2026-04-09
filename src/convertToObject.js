'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';').map((el) => el.trim());
  const arrOfArrs = arr.map((el) => el.split(':'));

  const res = {};

  for (let i = 0; i < arrOfArrs.length; i++) {
    if (arrOfArrs[i].length > 1) {
      const key = arrOfArrs[i][0].trim();
      const val = arrOfArrs[i][1].trim();

      res[key] = val;
    }
  }

  return res;
}

module.exports = convertToObject;
