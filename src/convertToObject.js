'use strict';

function convertToObject(sourceString) {
  const object = {};

  const arrayFromString = sourceString
    .split(';') // splitting by ;, creating array
    .map(element => element.trim()) // deleting spaces
    .filter(element => element); // making sure there are no false elements

  arrayFromString.forEach(element => {
    const finalArray = element.split(':');
    const key = finalArray[0].trim();
    const value = finalArray[1].trim();

    object[key] = value;
  });

  return object;
}

module.exports = convertToObject;
