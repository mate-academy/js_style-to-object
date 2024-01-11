'use strict';

function convertToObject(sourceString) {
  const resultObject = {};
  const sourceArray = sourceString.split(';');

  const cleanedArray = sourceArray.map(element => element.trim());

  cleanedArray.forEach(part => {
    const objPart = part.split(':').map(item => item.trim());

    if (objPart.length === 2) {
      const key = objPart[0];
      const value = objPart[1];

      resultObject[key] = value;
    }
  });

  return resultObject;
}

module.exports = convertToObject;
