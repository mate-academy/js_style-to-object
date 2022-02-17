'use strict';

function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(rule => rule.split(':').map(item => item.trim()))
    .filter(rule => rule.length === 2)
    .reduce((obj, [property, value]) => {
      obj[property] = value;

      return obj;
    }, {});

  return styles;
}

module.exports = convertToObject;
