'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let declarationsArr = sourceString
    .split(';')
    .map((declaration) => {
      // erase whitespaces, then add one after ':'
      return declaration.replace(/\r\n|\n|\r/gm, '', '').replace(':', ': ');
    })
    .filter((e) => e); // We filter out empty array values

  const obj = {};

  for (const declaration of declarationsArr) {
    const keyValue = declaration.split(':');
    const key = keyValue[0].trim();
    const value = keyValue[1];
    if (key.trim().length > 0) {
      obj[key.trim()] = value.trim();
    }
  }
  return obj;
}
