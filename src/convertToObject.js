'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strToArray = sourceString.split(';');
  const styles = {};

  for (const str of strToArray) {
    let [prop, value] = str.split(':');

    if (prop && value) {
      prop = prop.trim();
      value = value.trim();
      styles[prop] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
