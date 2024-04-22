'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const arr2 = [];

  arr.map((e) => {
    if (e.length > 4) {
      arr2.push(e.split(':'));
    }
  });

  const arrFlat = [];

  arr2.flat().map((e) => {
    const item = e.replace('\n', '  ');

    if (item.length !== 0) {
      arrFlat.push(item.trim());
    }
  });

  const result = {};

  for (let i = 0; i < arrFlat.length; i = i + 2) {
    result[arrFlat[i]] = arrFlat[i + 1];
  }

  return result;
}

module.exports = convertToObject;
