'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  const cssStyles = styles
    .filter((style) => style.trim().length > 0)
    .reduce((acc, style) => {
      const splittedStyle = style.split(':');
      const propertyName = splittedStyle[0].trim();
      const propertyValue = splittedStyle[1].trim();

      acc[propertyName] = propertyValue;

      return acc;
    }, {});

  return cssStyles;
}

module.exports = convertToObject;
