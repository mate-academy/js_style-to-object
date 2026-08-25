'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (sourceString) => {
  const declarations = sourceString.split(';');

  const cssStyles = declarations.reduce((acc, decl) => {
    const trimmed = decl.trim();

    if (trimmed === '') {
      return acc;
    }

    const colonIndex = Array.from(trimmed).findIndex((char) => {
      let currentParentheses = 0;

      if (char === '(') {
        currentParentheses++;
      } else if (char === ')') {
        currentParentheses--;
      }

      return char === ':' && currentParentheses === 0;
    });

    if (colonIndex === -1) {
      return acc;
    }

    const prop = trimmed.slice(0, colonIndex).trim();

    const val = trimmed.slice(colonIndex + 1).trim();

    acc[prop] = val;

    return acc;
  }, {});

  return cssStyles;
};

module.exports = convertToObject;
