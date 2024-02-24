"use strict";

function convertToObject(sourceString) {
  const styles = sourceString.split(";");
  const stylesCSS = {};

  styles
    .filter((style) => (style !== "" ? style.trim() : false))
    .map((style) => {
      const indexEnd = style.indexOf(":");
      const styleKey = style.slice(0, indexEnd).trim();
      const styleValue = style.slice(indexEnd + 1).trim();

      return (stylesCSS[styleKey] = styleValue);
    });

  return stylesCSS;
}

module.exports = convertToObject;
