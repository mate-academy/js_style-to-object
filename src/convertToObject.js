"use strict";

function convertToObject(sourceString) {
  const styles = sourceString.split(";");
  const stylesCSS = {};

  styles
    .filter((style) => style.trim())
    .forEach((style) => {
      const styleKey = style.split(":")[0];
      const styleValue = style.split(":")[1];

      stylesCSS[styleKey.trim()] = styleValue.trim();
    });

  return stylesCSS;
}

module.exports = convertToObject;
