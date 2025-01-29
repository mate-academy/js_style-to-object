function convertToObject(sourceString) {
  const cleanedString = sourceString.replace(/;{2,}/g, ';').trim();
  const declarations = cleanedString.split(';');
  const stylesObject = {};

  declarations.forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration) {
      const [property, ...valueParts] = trimmedDeclaration.split(':');
      const value = valueParts.join(':').trim();

      stylesObject[property.trim()] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
