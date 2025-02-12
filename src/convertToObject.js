'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertyCss = {};
  const cssProperty = sourceString.split(';');
  const cssPropertyTrim = [];

  cssProperty.map((item) => {
    return cssPropertyTrim.push(item.trim());
  });

  cssPropertyTrim.map((item) => {
    const property = item.split(':');

    if (property.length > 1) {
      const key = property[0].trim();
      const value = property[1].trim();

      propertyCss[key] = value;
    }
  });

  return propertyCss;
}

module.exports = convertToObject;
