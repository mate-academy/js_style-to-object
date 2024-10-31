'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const prop = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '');

  const object = {};

  prop.forEach((item) => {
    const [key, value] = item.split(':').map((part) => part.trim());

    if (key && value) {
      object[key] = value;
    }
  });

  return object;
}

module.exports = convertToObject;
