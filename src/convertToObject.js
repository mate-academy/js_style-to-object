'use strict';

function convertToObject(sourceString) {
  const styles = {};

  sourceString.split(';').forEach((declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (property) {
      styles[property] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
