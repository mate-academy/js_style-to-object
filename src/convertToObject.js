'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const styleObject = {};
  const declarations = sourceString.split(';');

  declarations.forEach((el) => {
    const item = el.trim();

    const parsts = item.split(/:\s*/);

    if (parsts.length === 2) {
      const key = parsts[0].trim();
      const value = parsts[1].trim();

      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
