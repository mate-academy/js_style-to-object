'use strict';

function convertToObject(sourceString) {
  const convertedObj = {};

  sourceString.split(';').map(stroke =>
    stroke.split(':').map(element => element.trim()))
    .filter(array => array.length > 1)
    .forEach(array => {
      convertedObj[array[0]] = array[1];
    });

  return convertedObj;
}

module.exports = convertToObject;
