'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (stylesString) => {
  return stylesString.split(';').reduce((styles, declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration) {
      const [property, ...valueParts] = trimmedDeclaration.split(':');

      if (valueParts.length > 0) {
        const trimmedProperty = property.trim();
        const trimmedValue = valueParts.join(':').trim();

        styles[trimmedProperty] = trimmedValue;
      }
    }

    return styles;
  }, {});
};

module.exports = convertToObject;
