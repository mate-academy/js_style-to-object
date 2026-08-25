'use strict';

function convertToObject(styles) {
  const declarations = styles.split(';');

  const styleObject = declarations.reduce((accumulator, declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return accumulator;
    }

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (property && value) {
      accumulator[property] = value;
    }

    return accumulator;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
