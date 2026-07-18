'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const answ = sourceString.split(';');

  const answ2 = answ.map((el) => el.trim());

  const answ3 = answ2.filter((row) => row !== '');

  const answ4 = answ3.map((row2) => {
    const sep = row2.indexOf(':');
    const key = row2.slice(0, sep).trim();
    const value = row2.slice(sep + 1).trim();

    return [key, value];
  });

  const res = answ4.reduce((accumulator, [key, value]) => {
    accumulator[key] = value;

    return accumulator;
  }, {});

  return res;
}

module.exports = convertToObject;
