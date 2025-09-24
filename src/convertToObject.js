'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if(sourceString.length === 0) {
    return {};
  }

  const styleLines = sourceString.split(';');
  const res = {};

  for(const i in styleLines) {
    const updatedSource = styleLines[i].split(':');

    if(updatedSource.length === 1) {
       continue;
    }

    const key = updatedSource[0].trim();
    const valueRaw = updatedSource[1].trim().split(' ');  

    let valueClean = [];

    for(const i in valueRaw) {
      if(valueRaw[i] !== ';' && valueRaw[i] !== '\t' && valueRaw[i] !== '\n') {
        valueClean.push(valueRaw[i])
      }
    }

    res[key] = `${valueClean.join(' ')}`
  }

  return res;
}

module.exports = convertToObject;
