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

  // split all props to separate strings

  const props = sourceString.split(';')
    .map((prop) => prop.replace(/[\n, \s]+/, ''))
    .filter((prop) => !!prop.length);

  // create new object for props
  const propsObj = {};

  // spilt each propetry to key value and assing to object
  for (let i = 0; i < props.length; i++) {
    const prop = props[i].split(':');

    propsObj[prop[0].trim()] = prop[1].trim();
  }

  return propsObj;
}

module.exports = convertToObject;
