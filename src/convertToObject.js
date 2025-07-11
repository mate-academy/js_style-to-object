'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString.split(';');

  splittedString.map(
    (element, index, array) => (array[index] = element.split(':')),
  );

  splittedString.map((element) => {
    for (let i = 0; i < element.length; i++) {
      element[i] = element[i].trim();
    }
  });

  return splittedString.reduce((accumulator = {}, string) => {
    const [key, value] = string;

    accumulator[key] = value;

    return accumulator;
  }, {});
}

module.exports = convertToObject;
