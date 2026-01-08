'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const initialStyles = {};
  const declarations = sourceString
    .split(';')
    .filter((element) => element.includes(':'));

  return declarations.reduce((output, currentString) => {
    const [key, value] = currentString.split(':', 2);
    const trimmedKey = key != null ? key.trim() : null;
    const trimmedValue = value != null ? value.trim() : null;

    if (!trimmedKey || !trimmedValue) {
      return output;
    }

    output[trimmedKey] = trimmedValue;

    return output;
  }, initialStyles);
}

module.exports = convertToObject;
