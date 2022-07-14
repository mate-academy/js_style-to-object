'use strict';

function convertToObject(sourceString) {
  const obj = {};
  const styles = sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element.length > 0);

  for (const style of styles) {
    const key = style.split(':').map(attribute => attribute.trim());

    obj[key[0]] = key[1];
  }

  return obj;
}

module.exports = convertToObject;
