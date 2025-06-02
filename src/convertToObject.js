'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';').filter((x) => x.trim() !== '');
  const tab = [];

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i].split(':').map((x) => x.trim());

    tab.push(a);
  }

  const obj = {};

  for (let i = 0; i < tab.length; i++) {
    const a = tab[i][0];
    const b = tab[i][1];

    obj[a] = b;
  }

  return obj;
}

module.exports = convertToObject;
