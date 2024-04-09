'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const styles = sourceString.split(';');

  styles.forEach((style) => {
    const [key, value] = style.split(':').map((item) => item.trim());

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
