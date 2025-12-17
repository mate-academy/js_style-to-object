'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const declarations = sourceString.split(';');

  const parts = declarations
    .filter((dec) => dec.trim() !== '')
    .map((dec) => {
      const pieces = dec.split(':');
      const key = pieces[0].trim();
      const value = pieces.slice(1).join(':').trim();

      return [key, value];
    });

  const styleObject = Object.fromEntries(parts);

  return styleObject;
}

module.exports = convertToObject;
