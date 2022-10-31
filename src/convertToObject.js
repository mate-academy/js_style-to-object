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
  const arrWithoutSemi = sourceString
    .split('')
    .filter(el => el !== ';');

  const arrOfProp = arrWithoutSemi
    .join('')
    .split('\n')
    .filter(el => el.trim());

  const convertedObj = arrOfProp.reduce(getProperty, {});

  return convertedObj;
}

function getProperty(prev, el) {
  const index = el.indexOf(':');

  return {
    ...prev,
    [el.slice(0, index).trim()]: el.slice(index + 1).trim(),

  };
}

module.exports = convertToObject;
