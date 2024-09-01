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
      const [key, value] = el.split(':').map((item) => item.trim());

      return Object.assign(object, { [key]: value });
    }, {});

  return obj;
}

module.exports = convertToObject;
