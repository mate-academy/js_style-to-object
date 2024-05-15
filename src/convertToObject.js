'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arrayFromSource = sourceString.split(';');
  const newArr = arrayFromSource.filter((el) => el.trim());

  return newArr.reduce((prev, el) => {
    const [key, value] = el.split(':');

    if (key && value) {
      prev[key.trim()] = value.trim();
    }

    return prev;
  }, {});
}

module.exports = convertToObject;
