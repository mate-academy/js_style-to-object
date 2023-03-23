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
  const stylesArray = sourceString.split(';');

  const stylesPairs = stylesArray.map(style => style.split(':')
    .map(word => word.trim())
    .filter(space => space !== ''))
    .filter(isEmpty => isEmpty.length > 0);

  const stylesObject = stylesPairs.reduce((obj, [key, value]) => {
    obj[key] = value;

    return obj;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
