'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectCssProperty = {};
  let cssProperty = sourceString.split(';');

  cssProperty = cssProperty.filter((word) => word.trim() !== '');

  for (const propertys of cssProperty) {
    const [key, value] = propertys.split(':');
    const property = key.trim();

    objectCssProperty[property] = value.trim();
  }

  return objectCssProperty;
}

module.exports = convertToObject;
