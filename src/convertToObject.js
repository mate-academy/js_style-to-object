'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  const stylesObjct = styleDeclarations.reduce((obj, style) => {
    const [property, value] = style.split(':');

    const Property = property?.trim();
    const Value = value?.trim();

    if (Property && Value) {
      obj[property.trim()] = value.trim();
    }

    return obj;
  }, {});

  return stylesObjct;
}

module.exports = convertToObject;
