'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString.split(';').reduce(
    (object, declaration) => {
      const trimmedDeclaration = declaration.trim();

      if (!trimmedDeclaration) {
        return object;
      }

      const [key, ...valueParts] = trimmedDeclaration.split(':');

      object[key.trim()] = valueParts.join(':').trim();

      return object;
    },
    {},
  );

  return stylesObject;
}

module.exports = convertToObject;