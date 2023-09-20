'use strict';

function convertToObject(sourceString) {
  const stylesObject = {};

  const KEY_INDEX = 0;
  const VALUE_INDEX = 1;
  const SPLIT_BY_SYMBOL = `\n`;
  const SEPARATE_BY_SYMBOL = ':';
  const MINIMAL_LENGTH_ALLOW = 3;

  sourceString.split(SPLIT_BY_SYMBOL)
    .filter((currentElement) =>
      currentElement.length > MINIMAL_LENGTH_ALLOW)
    .forEach(element => {
      const keyValueArray = element.split(SEPARATE_BY_SYMBOL);
      const key = (keyValueArray[KEY_INDEX]).trim();
      const value = (keyValueArray[VALUE_INDEX]).replace(';', '').trim();

      stylesObject[key] = value;
    });

  return stylesObject;
}

module.exports = convertToObject;
