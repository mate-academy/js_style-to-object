'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // result object declaration
  const styleSheet = {};

  const cleanedString = sourceString
    //.replace(/\s*\n\s*/g, ' ') // Replace line breaks with spaces
    .replace(/\s*;\s*/g, ';') // Normalize semicolons
    .trim();
  
  // Split declarations, handling multiple declarations in one line
  const declarations = cleanedString
    .split(';')
    .filter(decl => decl.trim());
  
    for (const declaration of declarations) {
      // Find the first colon to split key and value
      const colonIndex = declaration.indexOf(':');
      
      if (colonIndex !== -1) {
        // Extract key and value
        const key = declaration.slice(0, colonIndex).trim();
        const value = declaration.slice(colonIndex + 1).trim();
      
      // Add to styleSheet
      styleSheet[key] = value;
    }
  }
  return styleSheet;
}

module.exports = convertToObject;
