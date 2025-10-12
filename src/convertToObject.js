function convertToObject(stylesString) {
  
  const declarations = stylesString
    .split(';')
    .map(decl => decl.trim())
    .filter(decl => decl.length && decl.includes(':')) 

  const validDeclarations = declarations.map(decl => {
    const colonIndex = decl.indexOf(':')
    const property = decl.slice(0, colonIndex).trim()
    const value = decl.slice(colonIndex + 1).trim()
    return [property, value]
  }).filter(([property, value]) => property && value) 

  const stylesMap = validDeclarations.reduce((accumulator, [property, value]) => {
    return { ...accumulator, [property]: value }
  }, {})

  return stylesMap
}

export default convertToObject


