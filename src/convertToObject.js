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
  const styleDeclarations = cleanedSourceString.split(';');
  const stylesObject = {};

  styleDeclarations.forEach((str) => {
    const [key, value] = str.split(':').map((s) => s.trim());

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
