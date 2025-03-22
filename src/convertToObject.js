'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrStr = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((elem) => elem !== '');
  const newArr1 = arrStr.map((st) => st.split(':').map((nStr) => nStr.trim()));

  const newObj = newArr1.reduce((accom, elem) => {
    const key = elem[0];
    const value = elem[1];

    accom[key] = value;

    return accom;
  }, {});

  return newObj;
}

module.exports = convertToObject;
