'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(/[:;]/)
    .map((property) => property.trim())
    .filter((str) => str.length > 0)
    .reduce((styleObj, property, index, styleArr) => {
      if (index % 2 === 0) {
        styleObj[property] = styleArr[index + 1];
      }

      return styleObj;
    }, {});
}

module.exports = convertToObject;
