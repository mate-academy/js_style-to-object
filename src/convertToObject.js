'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const stylesObject = {};

  styles.forEach((style) => {
    const [property, value] = style.split(':');

    if (property && value) {
      const formattedProperty = property.trim();
      const formattedValue = value.trim();

      stylesObject[formattedProperty] = formattedValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
