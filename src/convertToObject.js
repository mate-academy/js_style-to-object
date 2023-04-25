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
  // write your code here
  // const stringToarray = sourceString.replace(/\s/g, '').split(';');

  // const cssAtions = stringToarray.filter(action => action.split(':'));
  // const cleaned = cssAtions.filter(action => action.length !== 0);
  // const cssArray = cleaned.map(item => item.split(':'));

  // const cssObject = cssArray.reduce((o, array) =>
  //   Object.assign(o, { [array[0]]: array[1] }), {});

  // return cssObject;

  const stringToarray = sourceString.replace(/\s\s+/g, ' ').split(';');

  const cleaned = stringToarray.filter(action => action.length > 1);
  const cssArray = cleaned.map(item => item.split(':'));

  const cssObject = cssArray.reduce((o, array) =>
    Object.assign(o, { [array[0].trim()]: String(array[1]).trim() }), {});

  return cssObject;
}

module.exports = convertToObject;
