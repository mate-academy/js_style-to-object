'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let stylesArr = sourceString.split(';');

  stylesArr = stylesArr.map(element => {
    let valuePair = element.split(':');

    valuePair = valuePair.map(value => value.trim());

    return valuePair.join(':');
  });

  while (stylesArr.includes('')) {
    stylesArr.splice(stylesArr.indexOf(''), 1);
  };

  const stylesObj = {};

  stylesArr.forEach(style => {
    const stylesPair = style.split(':');

    stylesObj[stylesPair[0]] = stylesPair[1];
  });

  return stylesObj;
}

module.exports = convertToObject;
