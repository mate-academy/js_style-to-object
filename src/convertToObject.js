'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propsValues = sourceString.split(';');
  const cssMap = {};

  propsValues.forEach((propValue) => {
    const [prop, value] = propValue.split(':');

    if (propValue.trim()) {
      cssMap[prop.trim()] = value.trim();
    }
  });

  return cssMap;
}

module.exports = convertToObject;
