'use strict';

function convertToObject(sourceString) {
  const objectFromString = sourceString.split(';')
    .map(pair => {
      return pair.split(':').map(item => item.trim());
    })
    .filter(item => item.length === 2)
    .reduce((object, currentItem) => {
      object[currentItem[0]] = currentItem[1];

      return object;
    }, {});

  return objectFromString;
};

module.exports = convertToObject;
