'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styles = sourceString.split(';').filter(Boolean);
  const stylesObject = styles.reduce((acc, style) => {
    const [property, value] = style.split(':').map((str) => str.trim());

    acc[property] = value;

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
