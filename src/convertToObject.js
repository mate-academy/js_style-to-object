'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const mas = sourceString.split(';');

  const obj = {};

  for (const m of mas) {
    const [name, value] = m.trim().split(':');

    if (name && value) {
      obj[name.trim()] = value.trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
