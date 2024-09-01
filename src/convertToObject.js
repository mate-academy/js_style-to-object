'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const obj = sourceString
    .split(';')
    .filter((line) => line.trim() !== '')
    .reduce((object, el) => {
      let [key, value] = el.split(':').map((item) => item.trim());

      key = key.split('').join('').trim();
      value = value.split('').join('').trim();

      return Object.assign(object, { [key]: value });
    }, {});

  return obj;
}

module.exports = convertToObject;
