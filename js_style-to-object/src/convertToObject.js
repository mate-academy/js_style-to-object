'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // an array of CSS properties and values
  if (sourceString.length === 0) {
    return {};
  }

  let declarationsArr = sourceString
    .split(';')
    .map((declaration) => {
      return declaration.replace(/\s/g, '').replace(':', ': '); // erase whitespaces, then add one after ':'
    })
    .filter((e) => e); // We filter out empty array values

  const newObj = {};

  for (const e of declarationsArr) {
    const tmp = e.split(': ');
    const key = tmp[0];
    const val = tmp[1];
    newObj[key] = val;
  }

  return newObj;
}

const result = convertToObject(complexStylesString);

return result;
