'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleList = sourceString
    .split(';')
    .filter((style) => style.trim() !== '');
  const styleObj = {};

  for (const item of styleList) {
    let [key, value] = item.split(':');

    key = key.trim();
    value = value.trim();

    styleObj[key] = value;
  }

  return styleObj;
}

module.exports = convertToObject;
