'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  const trimmedSourceString = sourceString.replace(/\t|\r/g, '').trim();

  if (!trimmedSourceString) {
    return {};
  }

  const matches = [
    ...trimmedSourceString.matchAll(/([-\w]+)\s*:\s*([\s\S]*?)(?:;|$)/g),
  ];

  const stylesObject = matches.reduce((acc, m) => {
    const property = m[1];
    let value = (m[2] || '').trim();

    if (value.includes('\n') && !value.includes(',')) {
      value = value.replace(/\s*\n+\s*/g, ' ');
    }

    if (property) {
      acc[property] = value;
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
