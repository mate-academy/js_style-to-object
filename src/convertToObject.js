'use strict';

function convertToObject(sourceString) {
  const result = {};
  const sourceStringSplit = sourceString.split(';');

  sourceStringSplit.forEach((style) => {
    const [key, value] = style.split(':').map(css => css.trim());

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
