'use strict';

/* eslint-disable */

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // splitting every property for separate string
  let props = sourceString
    .split(';')
    .filter((item) => item !== '' && item !== ' ');

  // removing breaking line symbols
  for (let i in props) {
    props[i] = props[i].split('\n').join('');
    props[i] = props[i].split('\t').join('');
  }

  let propsNames = [];
  let propsValues = [];

  // splitting property names and property values
  for (const i in props) {
    let splittedProp = props[i].split(':');
    propsNames[i] = splittedProp[0];
    propsValues[i] = splittedProp[1];
  }

  propsNames = propsNames.filter(item => containsChars(item));
  propsValues = propsValues.filter((item) => containsChars(item));

  // removing all spaces for each property name
  for (const i in propsNames) {
    propsNames[i] = propsNames[i]
      .split('')
      .filter((item) => item !== ' ')
      .join('');
  }

  // removing spaces at the start and the end of each property value
  for (const i in propsValues) {
    propsValues[i] = removeStartEndSpaces(propsValues[i]);
  }

  // adding linebreaks for properties with multiple lines
  for (let i in propsValues) {
    propsValues[i] = addLinebreaks(propsValues[i]);
  }

  // adding properties to an object
  for (let i in propsNames) {
    result[propsNames[i]] = propsValues[i];
  }

  return result;
}

function containsChars(string) {
  if (string === undefined) {
    return false;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ' && string[i] !== '') {
      return true;
    }
  }

  return false;
}

function removeStartEndSpaces(string) {
  let result = '';
  let startIndex = 0;
  let endIndex = string.length - 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      startIndex = i;
      break;
    }
  }

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      endIndex = i;
      break;
    }
  }

  for (let i = startIndex; i <= endIndex; i++) {
    result += string[i];
  }

  return result;
}

function addLinebreaks(string) {
  const separatedProps = string.split(',');

  return separatedProps.join(',\n');
}

module.exports = convertToObject;
