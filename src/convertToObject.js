'use strict';

function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, string) => {
    const [prop, value] = string.split(':').map(item => item.trim());

    prop && value && (stylesObject[prop] = value);

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
