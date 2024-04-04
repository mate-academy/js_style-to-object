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
      let normalizedStyle = style.trim();

      if (normalizedStyle.charAt(0) === '\n') {
        normalizedStyle = normalizedStyle.slice(1);
      }

      const splittedStyle = normalizedStyle.split(':');
      const propertyName = splittedStyle[0].trim();
      const propertyValue = splittedStyle[1].trim();

      acc[propertyName] = propertyValue;

      return acc;
    }, {});

  return cssStyles;
}

module.exports = convertToObject;
