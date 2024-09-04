'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';');
  const newArr = sourceArr.map((el) => el.trim());
  const result = newArr.reduce((prev, el) => {
    const [key, value] = el.split(':');

    if (key && value) {
      prev[key.trim()] = value.trim();
    }

    return prev;
  }, {});

  return result;
}

module.exports = convertToObject;
