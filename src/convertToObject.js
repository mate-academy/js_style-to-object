'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArr = sourceString.split(';');
  const obj = {};

  for (let x = 0; x < newArr.length; x++) {
    if (newArr[x]) {
      const strArr = Array.from(newArr[x]);

      if (strArr[0] === ' ' || strArr[0] === '\n' || strArr[0] === '\t') {
        strArr.shift();
        newArr[x] = strArr.join('');
        x--;
      }
    }
  }

  const cleanArr = newArr.filter((el) => el !== '');
  let keyValue = [];

  for (const i of cleanArr) {
    keyValue = i.split(':');

    let fieldName = keyValue[0].replace(/|\n|\t/gi, '').trim();
    let valueName = keyValue[1].replace(/|\n|\t/gi, '').trim();

    Object.assign(obj, { [fieldName]: valueName });
  }

  return obj;
}

module.exports = convertToObject;
