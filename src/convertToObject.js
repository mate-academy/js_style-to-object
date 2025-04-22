const DECLARATION_DELIMITER = ';';
const PROPERTY_VALUE_SEPARATOR = ':';

function convertToObject(stylesString) {
  const result = {};

  const declarations = stylesString
    .split(DECLARATION_DELIMITER)
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0);

  for (const declaration of declarations) {
    const separatorIndex = declaration.indexOf(PROPERTY_VALUE_SEPARATOR);

    if (separatorIndex === -1) {
      continue;
    }

    const property = declaration.slice(0, separatorIndex).trim();
    const value = declaration.slice(separatorIndex + 1).trim();

    if (!property) {
      continue;
    }

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
