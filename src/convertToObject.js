function convertToObject(styleString) {
  const styleObject = {};
  const lines = styleString.split(';');

  lines.forEach((line) => {
    const [property, value] = line.split(':');

    if (property && value) {
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      if (trimmedProperty && trimmedValue) {
        styleObject[trimmedProperty] = trimmedValue;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
