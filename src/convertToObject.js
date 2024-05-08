'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0)
    .map((style) => {
      const [key, value] = style.split(':').map((part) => part.trim());

      return { [key]: value };
    })
    .reduce((acc, style) => ({ ...acc, ...style }), {});

  return styles;
}

module.exports = convertToObject;
