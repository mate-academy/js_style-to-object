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
  const arr = sourceString.replace(/ +/g, ' ').trim().split(';');
  const arrCss = arr.map(elem => elem.split(':'));
  const valueAndProperty = 2;
  const clearCss = arrCss.filter(elem => elem.length === valueAndProperty);

  const createObject = (prev, css) => {
    return {
      ...prev,
      [css[0].trim()]: css[1].trim(),
    };
  };

  const result = clearCss.reduce(createObject, {});

  return result;
}

module.exports = convertToObject;
