'use strict';

function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';').filter(Boolean);

  const stylesObject = {};

  stylesArray.forEach(style => {
    if (style.trim() !== '') {
      const [property, value] = style.split(':').map(str => str.trim());

      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
