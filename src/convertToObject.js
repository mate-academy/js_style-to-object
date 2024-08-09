'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const styles = sourceString
    .split(';')
    .filter(Boolean)
    .map((style) => style.trim());

  styles.forEach((style) => {
    const [propery, value] = style.split(':').map((part) => part.trim());

    if (propery && value) {
      styleObject[propery] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
