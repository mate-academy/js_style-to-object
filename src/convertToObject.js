/**
 * @param {string} styleString
 *
 * @returns {object}
 */
const convertToObject = (styleString) => {
  if (!styleString) {
    return {};
  }

  const styleObject = styleString
    .split(';') // Divide a string em partes pelo ponto e vírgula
    .filter((line) => line.trim() !== '') // Remove partes vazias
    .reduce((acc, line) => {
      const colonIndex = line.indexOf(':');

      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim();

        acc[key] = value;
      }

      return acc;
    }, {});

  return styleObject;
};

module.exports = convertToObject;
