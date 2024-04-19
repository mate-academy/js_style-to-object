'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((newObj, declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (!trimmedDeclaration) {
      return newObj;
    }

    const [property, value] = trimmedDeclaration
      .split(':')
      .map((item) => item.trim());

    if (property && value) {
      newObj[property] = value;
    }

    return newObj;
  }, {});
}

module.exports = convertToObject;
