'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (sourceString) => {
  const trimmedSourceString = sourceString.trim();
  const styleDeclarations = trimmedSourceString.split(';');

  const stylesObject = styleDeclarations.reduce((acc, declaration) => {
    const [property, value] = declaration.split(':').map((item) => item.trim());

    if (property && value) {
      acc[property] = value;
    }

    return acc;
  }, {});

  return stylesObject;
};

module.exports = convertToObject;
