function convertToObject(sourceString) {
  const styleEntries = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item)
    .map((item) => item.split(':').map((subItem) => subItem.trim()));

  const styleObject = styleEntries.reduce((obj, [key, value]) => {
    if (key && value) {
      obj[key] = value;
    }

    return obj;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
