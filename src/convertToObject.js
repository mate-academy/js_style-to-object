'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const DECLARATION_SEPARATOR = ';';
  const PROPERTY_VALUE_SEPARATOR = ':';
  const stylesObject = {};
  const styleDeclarations = sourceString.split(DECLARATION_SEPARATOR);

  for (const styleDeclaration of styleDeclarations) {
    const [propertyName, propertyValue] = styleDeclaration
      .split(PROPERTY_VALUE_SEPARATOR)
      .map((stylePart) => stylePart.trim());

    if (!propertyName || !propertyValue) {
      continue;
    }

    stylesObject[propertyName] = propertyValue;
  }

  return stylesObject;
}

module.exports = convertToObject;
