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
  const arrayOfStyles = sourceString.split(';');
  let arrayOfPropertys = [];
  let arrayOfRules = [];
  const result = {};

  for (const style of arrayOfStyles) {
    const splited = style.split(':');

    arrayOfPropertys.push(splited[0].trim());
    arrayOfRules.push(splited[1]);
  }

  arrayOfPropertys = arrayOfPropertys.filter(element => element !== '');
  arrayOfRules = arrayOfRules.filter(element => element !== undefined);

  for (let i = 0; i < arrayOfPropertys.length; i++) {
    result[arrayOfPropertys[i]] = arrayOfRules[i].trim();
  }

  return result;
}

module.exports = convertToObject;
