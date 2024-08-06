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

let a = convertToObject(`
      box-shadow:
          inset 0 -3em 3em rgb(0 200 0 / 30%),
          0 0 0 2px white,
          0.3em 0.3em 1em rgb(200 0 0 / 60%);
    `);

console.log(a);

module.exports = convertToObject;
