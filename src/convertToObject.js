'use strict';

function convertToObject(sourceString) {
  // write your code here
  const styles = {};

  const stylesInfo = sourceString.split(';');

  stylesInfo.forEach((info) => {
    const [property, value] = info.split(':');

    if (property && value) {
      styles[property.trim()] = value.trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
