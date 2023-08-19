'use strict';
/* eslint max-len: ["error", { "ignoreComments": true }] */
/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const cssObject = {};
  const BREAK_SYMBOL = '\n';

  let propsArray = [];
  let cssPropLine = '';

  for (const cssProp of sourceString) {
    if (cssProp !== BREAK_SYMBOL) {
      cssPropLine += cssProp;
    } else {
      const cssPropTrim = cssPropLine.trimStart().trimEnd();

      if (cssPropTrim !== ';' && cssPropTrim !== '') {
        propsArray.push(cssPropTrim);
      }

      cssPropLine = '';
    }
  }

  propsArray = propsArray.map(item => {
    let key = '';
    let value = '';
    let fromPosition = 0;

    for (let i = 0; i < item.length; i++) {
      if (item[i] === ':') {
        fromPosition = i;
        break;
      }

      key += item[i];
    }

    for (let i = fromPosition + 1; i < item.length; i++) {
      if (item[i] === ';') {
        break;
      }

      value += item[i];
    }

    key = key.trimStart().trimEnd();
    value = value.trimStart().trimEnd();

    return [key, value];
  });

  propsArray.forEach(item => {
    const key = item[0];
    const value = item[1];

    cssObject[key] = value;
  });

  return cssObject;
}

module.exports = convertToObject;
