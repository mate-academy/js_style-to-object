'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return (
    sourceString
      // .replace(/\s+/g, '')
      .split(';')
      .map((style) => {
        const property = style.slice(0, style.indexOf(':')).trim();
        const value = style.slice(style.indexOf(':') + 1).trim();

        return [property, value];
      })
      .filter((style) => style[0].length > 0)
      .map(([property, value]) => ({ [property]: value }))
      .reduce((prev, current) => Object.assign(prev, current), {})
  );
}

module.exports = convertToObject;
