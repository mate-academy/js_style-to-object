'use strict';

function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((el) => el)
    .reduce((accumulator, value) => {
      const result = value.split(':');

      const [styleKey, styleValue] = result;

      accumulator[styleKey.trim()] = styleValue.trim();

      return accumulator;
    }, {});

  return styles;
}

module.exports = convertToObject;
