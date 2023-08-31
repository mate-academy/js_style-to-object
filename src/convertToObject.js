'use strict';

function convertToObject(sourceString) {
  const objOfProperties = sourceString.split(';')
    .map((property) => {
      if (property.indexOf(':') >= 0) {
        const convertedProp = property.split(':');

        convertedProp[0] = convertedProp[0].trim();
        convertedProp[1] = convertedProp[1].trim();

        return convertedProp;
      }
    })
    .filter((property) => property !== undefined)
    .reduce((prev, prop) => {
      return {
        ...prev, [prop[0]]: prop[1],
      };
    }, {});

  return objOfProperties;
}

module.exports = convertToObject;
