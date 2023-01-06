'use strict';

function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';').map(style =>
    style.split(':').map(styleRule => styleRule.trim()));
  const callback = (prev, style) => {
    return style[0]
      ? {
        ...prev, [style[0]]: style[1],
      }
      : prev;
  };
  const formattedStyles = stylesArray.reduce(callback, {});

  // eslint-disable-next-line no-console
  console.log(formattedStyles);

  return formattedStyles;
}

module.exports = convertToObject;
