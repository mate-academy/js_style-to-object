'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // const stylesSorted = {};
  const sorting = sourceString
    .trim()
    .split(';')
    .filter(items => items.length > 1 && items.includes(':'));

  // sorting.map(elements => {
  //   const [key, element] = elements.split(':');

  //   if (key && element) {
  //     stylesSorted[key.trim()] = element.trim();
  //   },
  // });
  return sorting.reduce((stylesSorted, elements) => {
    const [key, element] = elements.split(':');

    stylesSorted[key.trim()] = element.trim();

    return stylesSorted;
  }, {});
}

module.exports = convertToObject;
