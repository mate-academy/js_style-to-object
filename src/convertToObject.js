'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrSource = sourceString.split(';');
  const sourceObj = arrSource.reduce(getObject, {});

  function getObject(prev, item) {
    const pair = item.split(': ').map(x => x.trim());

    const updatedObject = pair[0]
      ? {
        ...prev,
        [pair[0]]: pair[1],
      }
      : { ...prev };

    return updatedObject;
  }

  return sourceObj;
}

module.exports = convertToObject;
