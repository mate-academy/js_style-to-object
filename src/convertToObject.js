function convertToObject(styles) {
  const styleObject = {};

  styles
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0)
    .forEach((style) => {
      const [property, value] = style.split(':').map((s) => s.trim());

      styleObject[property] = value;
    });

  return styleObject;
}

module.exports = convertToObject;
