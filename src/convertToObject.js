'use strict';

function convertToObject(sourceString) {
  const resultObject = {};
  const arrStyles = sourceString.split(';');

  arrStyles.forEach(item => {
    const [ property, value ] = item
      .split(':')
      .map(el => el.trim());

    if (property && value) {
      resultObject[property] = value;
    }
  });

  return resultObject;
}

module.exports = convertToObject;
