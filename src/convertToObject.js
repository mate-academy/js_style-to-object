'use strict';

/**
 * Implement convertToObject function:
 *

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalizedSourceString = sourceString
  .split(';')
  .map(propValuePair => {
    return propValuePair
      .split(':')
      .map(propOrValue =>
        propOrValue.trim()).join(':');
  })
  .filter(propValuePair => propValuePair.length > 1);

  return normalizedSourceString.reduce((cssStyles, propValuePair) => {
    const [key, value] = propValuePair.split(':');

    cssStyles[key] = value;

    return cssStyles;
  }, {});
}

module.exports = convertToObject;
