'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalizedString = sourceString.replace(/;+/g, ';').replace(/;$/, '');

  const stringToArr = normalizedString.split(';');
  const obj = {};

  for (const prop of stringToArr) {
    const [key, ...valueParts] = prop.split(':');

    if (key && valueParts.length > 0) {
      obj[key.trim()] = valueParts.join().trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
