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
  const styles = {};
  const itemList = sourceString.split(';\n');
  const dirtyStyleList = itemList.map(el => el.split(':'));
  const clearStyleList = dirtyStyleList.filter(el => el.length === 2);

  clearStyleList.forEach(([property, value]) => (
    styles[property.trim()] = value.trim()
  ));

  return styles;
}

module.exports = convertToObject;
