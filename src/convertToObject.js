'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const styleObj = {};

  declarations.forEach((declaration) => {
    const [property, ...value] = declaration.split(':');
    const formattedProp = property.trim();
    const formattedVal = value.join();

    if (formattedProp.length > 1) {
      styleObj[formattedProp] = formattedVal.trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
