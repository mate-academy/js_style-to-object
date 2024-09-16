'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  const stylesObject = styles.reduce((acc, style) => {
    if (/[a-z]/i.test(style)) {
      const [property, value] = style.split(':');

      return { ...acc, [property.trim()]: value.trim() };
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
