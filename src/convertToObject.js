function convertToObject(styleString) {
  const styleObject = {};
  const styleDeclarations = styleString.split(';');

  styleDeclarations.forEach((declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex !== -1) {
      const property = declaration.substring(0, colonIndex).trim();
      const value = declaration.substring(colonIndex + 1).trim();

      if (property && value) {
        styleObject[property] = value;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
