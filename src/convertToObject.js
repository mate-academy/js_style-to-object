'use strict';

function convertToObject(sourceString) {
  const stylesArr = sourceString
    .split(';').filter(style => style.trim().length > 0);

  const stylesObj = {};

  stylesArr.forEach(style => {
    const [property, value] = style
      .split(':').map(stylePart => stylePart.trim());

    stylesObj[property] = value;
  });

  return stylesObj;
}

module.exports = convertToObject;
