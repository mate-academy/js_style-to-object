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
  const propertiesObject = {};
  const propArr = sourceString
    .split(';')
    .map(elem => elem.replace(/\s+/g, ' ').trim())
    .filter(elem => elem !== '');

  propArr.forEach(elem => {
    const splitedElem = elem.split(':');

    propertiesObject[splitedElem[0].trim()] = splitedElem[1].trim();
  });

  return propertiesObject;
}

module.exports = convertToObject;
