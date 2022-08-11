'use strict';

function convertToObject(sourceString) {
  const noSpaceString = sourceString.split(';').map((a) => a.split(':'));
  const noSpaceKeys = noSpaceString
    .map((a) => a[0].replace(/[\n]/g, '').trim()).filter((b) => b !== '');
  const noSpaceValues = noSpaceString
    .map((a) => a[1] === undefined ? '' : a[1].trim()).filter((b) => b !== '');

  const result = {};

  for (let i = 0; i < noSpaceKeys.length; i++) {
    result[noSpaceKeys[i]] = noSpaceValues[i];
  }

  return result;
}

module.exports = convertToObject;
