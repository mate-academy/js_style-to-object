'use strict';

function convertToObject(sourceString) {
  const styleObj = {};

  const splittedStr = sourceString.split(';');

  splittedStr.forEach((item) => {
    const [key, value] = item
      .split(':')
      .map(string => string.trim());

    if (key && value) {
      styleObj[key] = value;
    }
  });

  return styleObj;
}

module.exports = convertToObject;
