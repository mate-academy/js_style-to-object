'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const arrTrimed = arr.map(prop => prop.trim());
  const propsWithoutEmptyStrings = arrTrimed.filter(prop => {
    if (prop !== '') {
      return prop;
    }
  });
  const propsArr = propsWithoutEmptyStrings.map(prop => {
    const propNameValue = prop.split(':');

    return propNameValue.map(str => str.trim());
  });

  const stylesObj = {};

  propsArr.forEach(prop => {
    stylesObj[prop[0]] = prop[1];
  });

  return stylesObj;
}

module.exports = convertToObject;
