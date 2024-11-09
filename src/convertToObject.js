'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleCss = {};
  const changeCss = sourceString.split(';');

  changeCss.forEach((item) => {
    const [key, value] = item.split(':');

    if (value !== undefined) {
      styleCss[key.trim()] = value.trim();
    }
  });

  return styleCss;
}

module.exports = convertToObject;
