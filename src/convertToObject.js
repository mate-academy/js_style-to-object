'use strict';

const complexStylesString = require('./stylesString');

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

// const complexString =
//   '  \n  \n border   \n  \n :  \n  \n   3px solid green  \n ; \n';

function convertToObject(sourceString) {
  const obj = {};

  let key = '';
  let value = '';

  // Create array of text lines, filtering out empty lines
  let lines = sourceString.split('\n').filter((line) => line.trim());

  let firstCharIndex = -2;
  let colonIndex = -2;
  let semicolonIndex = -2;

  let concatLine = '';

  for (const line of lines) {
    // skip lines with no alphabetical value
    if (!/[a-zA-Z:;]/.test(line)) {
      continue;
    }

    concatLine += line;

    const tmpFirstCharIndex = concatLine.indexOf(concatLine.trim());
    if (firstCharIndex === -2 && tmpFirstCharIndex !== -1) {
      firstCharIndex = tmpFirstCharIndex;
    }

    const tmpColonIndex = concatLine.indexOf(':');
    if (colonIndex === -2 && tmpColonIndex !== -1) {
      colonIndex = tmpColonIndex;
    }

    const tmpSemicolonIndex = concatLine.indexOf(';');
    if (semicolonIndex === -2 && tmpSemicolonIndex !== -1) {
      semicolonIndex = tmpSemicolonIndex;
    }

    // if (semicolonIndex !== -1) {
    //   semicolonIndex = localSemicolonIndex;
    // }

    // if (firstCharIndex !== -2 && colonIndex !== -2) {
    //   key = line.slice(firstCharIndex, colonIndex).trim();
    // }

    // if (colonIndex !== -2 && semicolonIndex !== -2) {
    //   value = line.slice(colonIndex + 1, semicolonIndex).trim();
    // }

    // if ((key !== '') & (value !== '')) {
    //   obj[key] = value;
    //   key = '';
    //   value = '';
    //   firstCharIndex = -2;
    //   colonIndex = -2;
    //   semicolonIndex = -2;
    // }

    // const firstCharIndex = line.indexOf(line.trim());
    // const colonIndex = line.indexOf(':');
    // const semicolonIndex = line.indexOf(';');
    if (firstCharIndex !== -2 && colonIndex !== -2 && semicolonIndex !== -2) {
      key = concatLine.slice(firstCharIndex, colonIndex).trim();
    }

    if (colonIndex !== -2 && semicolonIndex !== -2) {
      value = concatLine.slice(colonIndex + 1, semicolonIndex).trim();
      obj[key] = value;
      key = '';
      value = '';
      // restore sentinel values
      firstCharIndex = -2;
      colonIndex = -2;
      semicolonIndex = -2;
      concatLine = '';
    }

    //const currentKey = line.slice(firstCharIndex, colonIndex).trim();
    // const currentValue = line.slice(colonIndex + 1, semicolonIndex).trim();

    // Update current key if the line has one
    // if (colonIndex !== -1) {
    //   key = currentKey;
    // } else {
    //   key += currentKey;
    // }
    // a multi-line value with the terminal semicolon further afield
    // if (semicolonIndex === -1) {
    //   value += currentValue;
    // } else {
    //   value += currentValue;
    //   obj[key] = value;
    //   key = '';
    //   value = '';
    // }
  }
  console.log(obj);
  return obj;
}

convertToObject(complexStylesString);

module.exports = convertToObject;
