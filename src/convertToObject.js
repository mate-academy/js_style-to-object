function convertToObject(cssString) {
  const stylesObject = cssString
    .split(';')
    .map(decl => decl.trim())
    .filter(Boolean)
    .map(decl => {
      const colonIndex = decl.indexOf(':');
      if (colonIndex === -1) return null;
      const property = decl.slice(0, colonIndex).trim();
      const value = decl.slice(colonIndex + 1).trim();
      return [property, value];
    })
    .filter(Boolean)
    .reduce((acc, [property, value]) => { // <- zmieniona nazwa akumulatora
      acc[property] = value;
      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
