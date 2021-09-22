'use strict';

function convertToObject(sourceString) {
  const res = {};
  const sourceArr = sourceString.split(';');
  let paramName;
  let paramValue;

  sourceArr.forEach(style => {
    const styleArr = style.split(':');

    if (styleArr.length > 1) {
      paramName = styleArr[0].trim();
      paramValue = styleArr[1].trim();

      res[paramName] = paramValue;
    }
  });

  return res;
};

module.exports = convertToObject;
