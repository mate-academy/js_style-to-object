'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const arrayOfStyles = sourceString.split(';');
  const stylesObject = {};

  arrayOfStyles.forEach((el) => {
    const [key, value] = el.split(':').map((elem) => elem.trim());

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
