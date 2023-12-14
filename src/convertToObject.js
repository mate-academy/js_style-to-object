'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertObject = {};
  const arrString = sourceString.split(';');

  arrString.forEach((element) => {
    const arr = element.replace(/\n/g, '').split(':');

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    const [key, value] = arr;

    if (key) {
      convertObject[key] = value;
    }
  });

  return convertObject;
}

module.exports = convertToObject;
