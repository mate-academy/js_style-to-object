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
  const arrStyles = sourceString.split(';');
  const styleValueArr = arrStyles.map(prop => prop.split(':'));
  const styleValueFiltred = styleValueArr.filter(style => style.length === 2);
  const styleObj = styleValueFiltred.reduce((prop, item) => {
    const value = item[1].trim();
    const key = item[0].trim();

    prop[key] = value;

    return prop;
  }, {});

  return styleObj;
}

module.exports = convertToObject;
