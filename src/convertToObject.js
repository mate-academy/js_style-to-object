'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};
  const pars = sourceString.split(';');

  for (let line of pars) {
    line = line.trim();

    if (!line.includes(':')) {
      continue;
    }

    const index = line.indexOf(':');
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();

    res[key] = value;
  }

  return res;
}

module.exports = convertToObject;
