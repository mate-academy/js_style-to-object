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
  const clearCss = arrCss.filter(elem => elem[1] !== undefined);
  const keys = [];
  const values = [];

  clearCss.forEach(key => keys.push(key[0].trim()));
  clearCss.forEach(value => values.push(value[1].trim()));

  const callback = (key, value) => {
    const result = {};

    for (let i = 0; i < key.length; i++) {
      result[key[i]] = value[i];
    }

    return result;
  };
  const finishObj = callback(keys, values);

  return finishObj;
}

module.exports = convertToObject;
