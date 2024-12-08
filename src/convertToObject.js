function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((num) => num.trim())
    .filter((num) => num !== '' && num !== ' ')
    .reduce((prev, style) => {
      const [key, value] = style.split(':').map((part) => part.trim());

      if (key && value) {
        prev[key] = value;
      }

      return prev;
    }, {});
}

module.exports = convertToObject;
