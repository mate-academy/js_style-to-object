'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((key) => key)
    .reduce((obj, key) => {
      const [prop, value] = key.split(':').map((el) => el.trim());

      if (prop) {
        obj[prop] = value;
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
