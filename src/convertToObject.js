'use strict';

function convertToObject(sourceString) {
  const sourceObject = {};
  const sourceArr = sourceString
    .split(';')
    .map(item => item.split(':').map(string => string.trim()))
    .filter(item => item.length > 1);

  sourceArr.forEach(item => (sourceObject[item[0]] = item[1]));

  return sourceObject;
}

module.exports = convertToObject;
