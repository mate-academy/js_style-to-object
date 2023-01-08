'use strict';

/*
* @param {string} sourceString
*
* @return {object}
*/
function convertToObject(sourceString) {
  const stylesObject = {};
  const filteredArray = [];
  const filteredString = sourceString.split(';')
    .map(item => item.trim())
    .filter(item => item !== '');

  filteredString.map(property => filteredArray
    .push(property.split(':').map(value => value.trim())));

  filteredArray.map(styleList => {
    stylesObject[styleList[0]] = styleList[1];
  });

  return stylesObject;
}

module.exports = convertToObject;
