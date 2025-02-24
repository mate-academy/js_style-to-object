'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const currentStyles = {};
  const styles = sourceString.split(';');

  for (const style of styles) {
    const parts = style.split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      currentStyles[key] = value;
    }
  }

  return currentStyles;
}

module.exports = convertToObject;
