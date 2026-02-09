'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleList = sourceString.split(';');

  return styleList.reduce((stylesObject, styleRule) => {
    const [property, value] = styleRule.split(':').map((part) => part.trim());

    return {
      ...stylesObject,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
