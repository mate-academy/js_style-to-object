'use strict';

function convertToObject(sourceString) {
  const cssObject = {};
  const filteredItems = sourceString.split(';').filter(x => x.includes(':'));

  filteredItems.forEach((element) => {
    const part = element.split(':');
    const trimKey = part[0].trim();
    const trimValue = part[1].trim();

    cssObject[trimKey] = trimValue;
  });

  return cssObject;
}

module.exports = convertToObject;
