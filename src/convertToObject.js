'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let result = {};

  const pairs = sourceString
    .split(';') // 1. ['\n  background-color: #fff', '...', ';;', '']
    .map((rule) => {
      const sepIndex = rule.indexOf(':'); // 2. trying to find ':'

      if (sepIndex === -1) {
        return null; // if there is no ':' it's invalid row
      }

      const key = rule.slice(0, sepIndex).trim(); // 3. get key/value && -spaces
      const value = rule.slice(sepIndex + 1).trim();

      return [key, value];
    })
    .filter((pair) => pair && pair[0]); // 4. delete invalid and empty pairs

  result = Object.fromEntries(pairs); // 5. making final obj

  return result;
}

module.exports = convertToObject;
