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
function splitKey(string) {
  const firstIndex = string.lastIndexOf('\n') + 1;
  const lastIndex = string.indexOf(':');

  return string.slice(firstIndex, lastIndex).trim();
}

function splitValue(string) {
  const valuePart = string.slice(string.indexOf(':') + 1);

  return valuePart.replace(/\s+/g, ' ').trim();
}

function convertToObject(sourceString) {
  const cssProperties = {};
  const splitedStr = sourceString.split(';');

  for (const string of splitedStr) {
    if (splitKey(string) && splitValue(string)) {
      cssProperties[splitKey(string)] = splitValue(string);
    }
  }

  const sortedCss = Object.keys(cssProperties).sort((a, b) => {
    let first = a;
    let second = b;

    if (a.includes('-webkit-')) {
      first = a.slice(8);
    } else if (a.indexOf('-') === 0) {
      first = a.slice(1);
    }

    if (b.includes('-webkit-')) {
      second = b.slice(8);
    } else if (b.indexOf('-') === 0) {
      second = b.slice(1);
    }

    return first - second;
  }).reduce((obj, key) => {
    obj[key] = cssProperties[key];

    return obj;
  }, {});

  return sortedCss;
}

module.exports = convertToObject;
