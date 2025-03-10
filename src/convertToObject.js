function convertToObject(stylesString) {
  const stylesObject = {};

  const declarations = stylesString
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':').map((s) => s.trim());

    if (property && value !== undefined) {
      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
