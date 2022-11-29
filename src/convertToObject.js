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
  const regex = new CSSRegex(/([\w-#!.\s]+)/, 'gim');
  const group = sourceString.match(regex);

  for (const [key, value] of Object.entries(group)) {
    if (key.length === 0 || value.length === 0 || value === undefined) {
      delete group[key];
    }
  }

  return group;
}

class CSSRegex extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);

    if (!result) {
      return null;
    }

    const obj = {};

    for (let i = 0; i < result.length; i += 2) {
      obj[result[i].trim()] = String(result[i + 1]).trim();
    }

    return obj;
  }
}

module.exports = convertToObject;
