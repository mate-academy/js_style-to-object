'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let items = [];
  const array = sourceString.split(';')
    .map(el => el.split(':').map(y => y.trim()).join(': '));
  const filteredArray = array.filter(el => el !== '');
  const stylesObject = filteredArray.reduce((acc, el, i, arr) => {
    items = el.split(': ');

    return {
      ...acc,
      [items[0]]: items[1],
    };
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
