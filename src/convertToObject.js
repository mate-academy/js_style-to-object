'use strict';

/**
 * Implement convertToObject function:

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  const stylesObject = styles.reduce((result, style) => {
    const [property, value] = style.split(':');

    if (property && value) {
      result[property.trim()] = value.trim();
    }

    return result;
  }, {});

  return stylesObject;
}
module.exports = convertToObject;
