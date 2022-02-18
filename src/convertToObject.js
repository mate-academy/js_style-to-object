'use strict';

const convertToObject = (sourceString) => {
  return sourceString.split(';').reduce((stylesObject, string) => {
    const [prop, value] = string.split(':').map((rulePart) => rulePart.trim());

    prop && value && (stylesObject[prop] = value);

    return stylesObject;
  }, {});
};

module.exports = convertToObject;
