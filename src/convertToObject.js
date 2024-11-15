'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const myArray = sourceString.split(';');

  const tempArray = myArray.map((element, index, array) => {
    const trimmedElement = element.trim();
    const [key, value] = trimmedElement.split(':').map((item) => item.trim());

    return { [key]: value };
  });

  const result = tempArray.reduce(
    (objects, object) => ({ ...objects, ...object }),
    {},
  );

  return result;
}

module.exports = convertToObject;
