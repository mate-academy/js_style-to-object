'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keyVal = sourceString.split(';');
  const styles = {};

  keyVal.forEach((prop) => {
    const [key, val] = prop.split(':').map((e) => e.trim());

    if (key && val) {
      styles[key] = val;
    }
  });

  return styles;
}

module.exports = convertToObject;
