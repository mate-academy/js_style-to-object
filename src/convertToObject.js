'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const box01 = sourceString.split(';').filter((item) => item !== '');

  const arr01 = box01.map((item) => {
    return item.split(':');
  });

  const arr02 = arr01.map((item) => item.map((part) => part.trim()));

  const objsct = {};

  arr02.forEach(([arr01It, arr02It]) => (objsct[arr01It] = arr02It));

  return objsct;
}

module.exports = convertToObject;
