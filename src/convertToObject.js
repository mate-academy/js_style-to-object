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
 let newObject = {};
 let splittedArray = sourceString.split(';');

  for(let i = 0; i < splittedArray.length; i++) {
    let newSplittedArray = splittedArray[i].split(':');
    

    if(newSplittedArray.length === 2) {
      newObject[newSplittedArray[0].trim()] = newSplittedArray[1].trim();
    }
   
  }

  return newObject;
}
module.exports = convertToObject;
