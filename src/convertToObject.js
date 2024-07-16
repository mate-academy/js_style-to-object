'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const cleanedSourceString = sourceString.replace(/\s*;\s*/g, ';\n').trim();
  const styleDeclarations = cleanedSourceString
    .split(';')
    .filter((str) => str.trim() !== '');
  const stylesObject = {};

  styleDeclarations.forEach((str) => {
    const [key, value] = str.split(':').map((s) => s.trim());

    if (key && value) {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
