'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};

  if (!sourceString || typeof sourceString !== 'string') {
    return result;
  }

  let buffer = '';
  let property = null;
  let value = '';
  let inValue = false;
  const pushRule = () => {
    if (property !== null) {
      result[property.trim()] = value.trim();
    }
    property = null;
    value = '';
    inValue = false;
  };

  for (let i = 0; i < sourceString.length; i++) {
    const char = sourceString[i];

    if (!inValue) {
      if (char === ':') {
        property = buffer;
        buffer = '';
        inValue = true;
      } else if (char === ';' || char === '\n' || char === '\r') {
        buffer = '';
      } else {
        buffer += char;
      }
    } else {
      if (char === ';') {
        value = buffer;
        pushRule();
        buffer = '';
      } else {
        buffer += char;
      }
    }
  }

  // handle last rule if not ended with ;
  if (inValue && property !== null && buffer.trim() !== '') {
    value = buffer;
    pushRule();
  }

  return result;
}

module.exports = convertToObject;
