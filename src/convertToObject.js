'use strict';
function convertToObject(sourceString) {
  const objStyle = {};

  const arrProp = sourceString.split(';').map(el => el.split(':'));

  const delSpace = arrProp.map(el => el.map(prop => prop.trim()));

  for (const el of delSpace) {
    objStyle[el[0]] = el[1];
  }

  for (const key in objStyle) {
    if (objStyle[key] === undefined) {
      delete objStyle[key];
    }
  }

  return objStyle;
}

module.exports = convertToObject;
