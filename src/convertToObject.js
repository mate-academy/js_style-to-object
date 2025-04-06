'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((el) => {
      const [key, value] = el.split(':');

      return { key, value };
    })
    .filter(({ key, value }) => !!key && !!value)
    .reduce((obj, { key, value }) => {
      obj[key.replace(/\n/, '').trim()] = value.trim();

      return obj;
    }, {});
}

module.exports = convertToObject;
