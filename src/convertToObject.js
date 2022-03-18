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
  const elements = sourceString.split(';');
  const filteredElements = [];
  const stylesObject = {};

  for (let i = 0; i < elements.length; i++) {
    const trimedLine = elements[i].trim();

    if (trimedLine !== '') {
      filteredElements.push(trimedLine.split(':'));
    }
  }

  for (let j = 0; j < filteredElements.length; j++) {
    stylesObject[filteredElements[j][0].trim()] = filteredElements[j][1].trim();
  }

  return stylesObject;
}

module.exports = convertToObject;
