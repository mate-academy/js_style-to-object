'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';');

  const triM = result.filter((item) => item.trim());
  const triMe = triM.map((item) => {
    const index = item.indexOf(':');
    const key = item.slice(0, index).trim();
    const value = item.slice(index + 1).trim();

    return { key, value };
  });

  const resul = triMe.reduce((acc, { key, value }) => {
    acc[key] = value;

    return acc;
  }, {});

  return resul;
  // write your code here
}

module.exports = convertToObject;
