'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((styles, item) => {
      const objectRow = item.split(':');
      const keyObject = objectRow[0] ? objectRow[0].trim() : null;
      const valueObject = objectRow[1] ? objectRow[1].trim() : null;

      if (keyObject && valueObject) {
        styles[keyObject] = valueObject;
      }

      return styles;
    }, {});
}
module.exports = convertToObject;
