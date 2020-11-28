'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const splited = sourceString.split(';');
  const trimed = [];

  splited.forEach(element => {
    trimed.push(element.trim());
  });

  const splitedByColon = [];

  trimed.forEach(element => {
    splitedByColon.push(element.split(':'));
  });

  const eachTrimed = [];

  for (let i = 0; i < splitedByColon.length; i++) {
    splitedByColon[i].forEach(element => {
      eachTrimed.push(element.trim());
    });
  }

  const filtredFromEmpty = eachTrimed.filter(element => element !== '');

  const keys = [];

  for (let i = 0; i < filtredFromEmpty.length; i += 2) {
    keys.push(filtredFromEmpty[i]);
  }

  const values = [];

  for (let i = 1; i < filtredFromEmpty.length; i += 2) {
    values.push(filtredFromEmpty[i]);
  }

  const newObj = {};

  for (let i = 0; i < values.length; i++) {
    newObj[keys[i]] = values[i];
  }

  return newObj;
}

module.exports = convertToObject;
