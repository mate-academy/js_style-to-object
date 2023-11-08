'use strict';

function convertToObject(sourceString) {
  return sourceString.split(';').reduce((object, item) => {
    const objectRow = item.split(':');
    const keyObject = objectRow[0] ? objectRow[0].trim() : null;
    const valueObject = objectRow[1] ? objectRow[1].trim() : null;

    if (keyObject && valueObject) {
      object[keyObject] = valueObject;
    }

    return object;
  }, {});
}
module.exports = convertToObject;
