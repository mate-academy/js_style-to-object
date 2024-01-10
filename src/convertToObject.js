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
  const NEW_STYLE = {};
  const SOU_STR_SPLIT = sourceString.split(';');
  const STYLE_ARR = [];

  for (let i = 0; i < SOU_STR_SPLIT.length; i++) {
    SOU_STR_SPLIT[i] = SOU_STR_SPLIT[i].replace('\n', '').trim();

    if (SOU_STR_SPLIT[i].length === 0) {
      SOU_STR_SPLIT.splice(i, 1);
      i--;
      continue;
    }
    STYLE_ARR[i] = SOU_STR_SPLIT[i].split(':');
    STYLE_ARR[i][0] = STYLE_ARR[i][0].trim();
    STYLE_ARR[i][1] = STYLE_ARR[i][1].trim();
  }

  for (let i = 0; i < STYLE_ARR.length; i++) {
    NEW_STYLE[STYLE_ARR[i][0]] = STYLE_ARR[i][1];
  }

  return NEW_STYLE;
}

module.exports = convertToObject;
