'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyles = {};

  const attributes = sourceString.split(';');

  const styles = attributes
    .map(attribute => {
      const style = attribute.split(':');

      return style.map(property => property.trim());
    })
    .filter(attribute => attribute.length > 1);

  styles.forEach(attribute => {
    const [key, value] = attribute;

    return (convertedStyles[key] = value);
  });

  return convertedStyles;
}

module.exports = convertToObject;
