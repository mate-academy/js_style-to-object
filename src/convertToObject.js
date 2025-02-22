'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const cssObject = {};

  for (const style of styles) {
    const cssDeclaration = style.split(':');
    const prop = cssDeclaration[0]?.trim();
    const value = cssDeclaration[1]?.trim();

    if (prop && value) {
      cssObject[prop] = value;
    }
  }

  return cssObject;
}

module.exports = convertToObject;
