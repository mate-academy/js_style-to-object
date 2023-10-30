'use strict';

function convertToObject(sourceString) {
  const arraySourceString = sourceString.split(';');
  const convertObjStyle = {};

  arraySourceString.forEach((item) => {
    const separationItem = item.split(':');

    if (separationItem.length === 2) {
      convertObjStyle[separationItem[0].trim()] = separationItem[1].trim();
    }
  });

  return convertObjStyle;
}

module.exports = convertToObject;
