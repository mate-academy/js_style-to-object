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
  let newString = sourceString.split(';');

  newString = newString.map(prop => prop.split(':'));
  newString = newString.map(prop => prop.map(x => x.trim()));
  newString = newString.filter(prop => prop.length > 1);

  const callback = (prev, x) => {
    return {
      ...prev,
      [x[0]]: x[1],
    };
  };

  return newString.reduce(callback, 0);
}

module.exports = convertToObject;
