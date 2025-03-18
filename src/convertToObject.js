'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // const cutString = sourceString.split(';');
  // const deleteSpace = cutString.filter((key) => key.trim());

  // const result = deleteSpace.reduce((acc, style) => {
  //   const [property, value] = style.split(':').map((part) => part.trim());

  //   acc[property] = value;

  //   return acc;
  // }, {});

  // return result;

  const styles = sourceString
    .split(';')
    .filter((styleString) => styleString.trim())
    .map((style) => style.split(':').map((part) => part.trim()))
    .reduce((cssObject, [property, value]) => {
      cssObject[property] = value;

      return cssObject;
    }, {});

  return styles;
}

module.exports = convertToObject;
