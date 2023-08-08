'use strict';

function convertToObject(sourceString) {
  const filteredItems = sourceString.split(';').filter(x => x.includes(':'));

  const cssObject = filteredItems.reduce((acc, element) => {
    const [key, value] = element.split(':');

    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
