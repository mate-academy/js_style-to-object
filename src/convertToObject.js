'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const oobjectified = sourceString
    .split(';')
    .map(prop => prop
      .trim()
      .split(':')
      .map(item => item.trim()))
    .filter(prop => prop.length > 1)
    .reduce((obj, [key, value]) => {
      obj[key] = value;

      return obj;
    }, {});

  return oobjectified;
}

module.exports = convertToObject;
