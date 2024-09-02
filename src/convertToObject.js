'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const FORMAT_SOURCE = sourceString.split('\n').join('');
  const STYLE_ARRAY = FORMAT_SOURCE.split(';');

  const STYLE_OBJECT = {};

  const PAIRS_OF_STYLE = STYLE_ARRAY.map((item) => item.split(':'));

  PAIRS_OF_STYLE.forEach((item) => {
    if (item.length < 2) {
      return 0;
    }

    const KEY = item[0].trim();
    const VALUE = item[1].split(',').join(`,\n`).trim();

    STYLE_OBJECT[KEY] = VALUE;
  });

  return STYLE_OBJECT;
}

module.exports = convertToObject;
