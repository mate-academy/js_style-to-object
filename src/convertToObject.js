'use strict';

function convertToObject(stylesString) {
  const stylesArray = stylesString.split(';');

  const stylesObject = stylesArray.reduce((acc, style) => {
    const [property, value] = style.split(':').map(part => part.trim());

    if (property && value) {
      acc[property] = value;
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
