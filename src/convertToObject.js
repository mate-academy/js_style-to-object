'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const tab = sourceString
    .split(';')
    .join(':')
    .split(':')
    .filter((pom) => /\S/.test(pom))
    .map((el) => el.trim());

  for (let i = 0; i < tab.length; i += 2) {
    result[tab[i]] = tab[i + 1];
  }

  return result;
}

module.exports = convertToObject;
