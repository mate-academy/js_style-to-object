function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const styles = {};

  for (const declaration of declarations) {
    const [key, value] = declaration.split(':').map((item) => item.trim());

    if (key && value) {
      styles[key] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
