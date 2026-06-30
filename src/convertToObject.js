'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration === '') {
      return stylesObject;
    }

    const [rawKey, rawValue] = trimmedDeclaration.split(':');

    if (!rawKey || !rawValue) {
      return stylesObject;
    }

    const key = rawKey.trim();
    const value = rawValue.trim();

    return {
      ...stylesObject,
      [key]: value,
    };
  }, {});
}

module.exports = convertToObject;
