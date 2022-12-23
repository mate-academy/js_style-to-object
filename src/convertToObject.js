'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const props = sourceString.split(';');
  let cssPropsObj = {};

  props.forEach(prop => {
    const propDyad = prop.split(':');

    if (propDyad[1]) {
      cssPropsObj = {
        ...cssPropsObj,
        [propDyad[0].trim()]: propDyad[1].trim(),
      };
    }
  });

  return cssPropsObj;
}

module.exports = convertToObject;
