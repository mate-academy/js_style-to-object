'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const tmpArr = sourceString.split(';');
  const tmpArr2 = [];
  const keys = [];
  const value = [];
  const objKey = [];
  const obj = {};

  for (let i = 0; i < tmpArr.length; i++) {
    if (tmpArr[i].length > 5) {
      tmpArr2.push(tmpArr[i].trim());
    }
  }

  for (let i = 0; i < tmpArr2.length; i++) {
    const space = tmpArr2[i].indexOf(' ');

    keys.push(tmpArr2[i].substring(0, space));
    value.push(tmpArr2[i].substring(space + 1).trim());
  }

  const objValue = value.map(function(valueItem) {
    return valueItem.replace(':', '').trimStart();
  });

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].slice(-1) === ':') {
      objKey.push(keys[i].slice(0, -1));
    } else {
      objKey.push(keys[i]);
    }
  };

  for (let i = 0; i < objKey.length; i++) {
    obj[objKey[i]] = objValue[i];
  };

  return obj;
}

module.exports = convertToObject;
