'use strict';

function convertToObject(sourceString) {
  const newObj = {};
  let property;
  const newArr = sourceString.split(';');
  newArr.pop();

  for (let i = 0; i < newArr.length; i++) {
    property = newArr[i].trim().split(': ');
    newObj[property[0]] = property[1];
  }

  return newObj;
}

module.exports = convertToObject;
