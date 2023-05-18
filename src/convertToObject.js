'use strict';

/**

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const stylesObject = {};

  for (const style of stylesArray) {
    const [property, value] = style.split(':').map((item) => item.trim());

    if (property && value) {
      stylesObject[property] = value;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
