'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString.split(';').map((item) => {
    return item.trim();
  });
  const fillterAllProp = styleArray.filter((item) => {
    return item !== '\n' && item !== '';
  });
  const styleObject = fillterAllProp.map((item) => {
    return item.split(':').map(el => el.trim());
  }).reduce(createObject, {});

  return styleObject;
}

const createObject = (object, current) => {
  return {
    ...object,
    [current[0]]: current[1],
  };
};

module.exports = convertToObject;
