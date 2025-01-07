function convertToObject(sourceString) {
  const cleanedString = sourceString.trim();
  const declarations = cleanedString
    .split(';')
    .filter((str) => str.trim() !== '');

  if (declarations.length === 0) {
    return {};
  }

  const styleObject = {};

  declarations.forEach((declaration) => {
    const [key, ...valueParts] = declaration.split(':');
    const value = valueParts.join(':').trim();

    if (key && value) {
      styleObject[key.trim()] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
