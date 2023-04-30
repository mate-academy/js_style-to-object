'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArr = sourceString.split(';');
  const formArr = newArr.map(x => x.split(':'));

  const newObj = formArr.reduce((prev, elem) => {
    if (elem[1] === undefined) {
      return { ...prev };
    } else {
      const firstElem = elem[0].trim();
      const secondElem = elem[1].trim();

      return {
        ...prev,
        [firstElem]: secondElem,
      };
    }
  }, {});

  return newObj;
}

module.exports = convertToObject;
