'use strict';

function convertToObject(sourceString) {
  // write your code here
  const getArr = sourceString.split(';');
  const getObj = {};

  getArr.forEach(property => {
    const [key, string] = property.split(':');

    if (key.trim() && string.trim()) {
      getObj[key.trim()] = string.trim();
    }
  });

  return getObj;
}

module.exports = convertToObject;
