'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles */
/* (see an example in [stylesString.js](./stylesString.js))
 * */
/*
 * and returns an object where CSS properties are keys
 * and values are the values of related */
/* CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedPart = sourceString
    .split(';')
    .map(space => space.trim())
    .filter(element => element.length !== 0)
    .map(part => part.split(':'));

  const createdObject = splitedPart
    .reduce((prev, value) => {
      return {
        ...prev,
        [value[0].trim()]: value[1].trim(),
      };
    }, {});

  return createdObject;
}

module.exports = convertToObject;
