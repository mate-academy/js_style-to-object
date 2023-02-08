'use strict';

function convertToObject(sourceString) {
  const resultObj = {};
  const createdArray = sourceString.split(';');

  createdArray.map((element) => {
    const [key, value] = element.split(':');

    if (key && value) {
      resultObj[key.trim()] = value.trim();
    }
  });

  return resultObj;
};

module.exports = convertToObject;
