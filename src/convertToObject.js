'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(styles) {
  const stylesMap = {};

  styles.split(';').forEach((item) => {
    if (!item.trim()) {
      return;
    }

    const [key, value] = item.split(':');

    if (!key || !value) {
      return;
    }

    stylesMap[key.trim()] = value.trim();
  });

  return stylesMap;
}

module.exports = convertToObject;
