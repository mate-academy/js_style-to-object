'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const arr = sourceString.split(';');
  const arrTrimmed = arr.map(s => s.trim()).filter(s => s.length > 0);

  arrTrimmed.forEach(element => {
    const i = element.indexOf(':');

    if (i < 0) {
      return;
    }

    const key = element.slice(0, i).trim();
    const value = element.slice(i + 1).trim();

    if (!key) {
      return
    }

    obj[key] = value
  });

  return obj;
}

module.exports = convertToObject;
