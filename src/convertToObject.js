'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitString = sourceString.split(';');
  const styles = {};

  splitString.forEach((element) => {
    const [key, value] = element.split(':').map((item) => item && item.trim());

    if ((key, value)) {
      styles[key] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
