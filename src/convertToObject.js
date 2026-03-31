'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .filter((item) => item)
    .map((item) => item.trim())
    .forEach((item) => {
      const [selector, name] = item.split(':').map((part) => part.trim());

      return (stylesObject[selector] = name);
    });

  return stylesObject;
}

module.exports = convertToObject;
