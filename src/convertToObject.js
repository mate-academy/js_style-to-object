'use strict';

function convertToObject(sourceString) {
  const stylesArr = sourceString.split(';');

  return stylesArr.reduce((object, style) => {
    const [key, value] = style.split(':');

    if (key && value) {
      object[key.trim()] = value.trim();
    }

    return object;
  }, {});
}

module.exports = convertToObject;
