'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString.split(';');

  splittedString.forEach(
    (element, index, array) => (array[index] = element.split(':')),
  );

  splittedString.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      element[i] = element[i].trim();
    }
  });

  return splittedString.reduce((accumulator = {}, string) => {
    const [key, value] = string;

    if (key === '') {
      accumulator[key] = value;
    }

    return accumulator;
  }, {});
}

module.exports = convertToObject;
