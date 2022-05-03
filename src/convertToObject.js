'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};
  const stylesSeparated = sourceString.split('\n')
    .filter(item => item.trim().length > 1);

  const styles = stylesSeparated.map(item => item.split(':'));

  for (const style of styles) {
    const [ key, value ] = style;

    styleObj[key.trim()] = value.slice(0, -1).trim();
  }

  return styleObj;
}

module.exports = convertToObject;
