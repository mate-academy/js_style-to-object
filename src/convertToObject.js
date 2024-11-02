'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const str = sourceString
    .replace(/^\s*[\r\n]/gm, '')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*:\s*/g, ': ')
    .trim();

  const cleanArray = str.split(';').filter((elem) => elem.length > 0);
  const obj = {};

  for (let i = 0; i < cleanArray.length; i++) {
    const properties = cleanArray[i].split(':');
    const key = properties[0].trim();
    const value = properties[1].trim();

    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
