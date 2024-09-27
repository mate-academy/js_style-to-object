'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styles = {};

  const stylesInArr = sourceString.replace(/\r|\r?\n/g, '').split(';');

  stylesInArr.map(item => {
    const key = item.split(':');

    if (key[1] !== undefined) {
      styles[key[0].trim()] = key[1].trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
