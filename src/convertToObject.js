function convertToObject(stylesString) {
  // Podziel string na deklaracje CSS
  const declarations = stylesString
    .split(';')
    .map(decl => decl.trim())
    .filter(decl => decl.length && decl.includes(':'))

  // Zamień każdą deklarację na parę [property, value] przy pierwszym dwukropku
  const validDeclarations = declarations
    .map(decl => {
      const colonIndex = decl.indexOf(':')
      const property = decl.slice(0, colonIndex).trim()
      const value = decl.slice(colonIndex + 1).trim()
      return [property, value]
    })
    .filter(([property, value]) => property && value)

  // Zbuduj obiekt CSS bez mutowania istniejącego obiektu
  const stylesMap = validDeclarations.reduce(
    (accumulator, [property, value]) => ({
      ...accumulator,
      [property]: value,
    }),
    {}
  )

  return stylesMap
}

module.exports = convertToObject



