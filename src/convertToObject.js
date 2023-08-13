'use strict';

function convertToObject(sourceString) {
  const stylesArr = sourceString.trim().split(';');
  const styleObject = {};

  stylesArr.forEach((property) => {
    const [key, value] = property.split(':').map(item => item.trim());

    if (key && value) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
