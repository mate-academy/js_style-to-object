'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const splited = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el.length > 0);

  const res = splited.map((el) => {
    const index = el.indexOf(':');
    const key = el.slice(0, index).trim();
    const value = el.slice(index + 1).trim();

    return [key, value];
  });

  return Object.fromEntries(res);
}

module.exports = convertToObject;
