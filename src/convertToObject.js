'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const bundlesToCheck = sourceString
    .replace('\n', '')
    .split(';');

  bundlesToCheck.forEach(bundle => {
    const trimmedBundle = bundle.trim();

    if (trimmedBundle) {
      const [property, value] = trimmedBundle
        .split(':')
        .map(item => item.trim());

      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
