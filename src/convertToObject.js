'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrOfProperties = sourceString.split(';');

  const allProps = arrOfProperties.map((value, index) => {
    while (value.startsWith('/n')) {
      value.replace('/n', '..');
    };

    return value.trim();
  });

  const validProps = allProps.filter((prop) => prop);

  const stylesToCSS = validProps.reduce((styles, prop, index,) => {
    const singleProp = prop.split(':');
    const propName = singleProp[0].trim();
    const propValue = singleProp[1].trim();

    styles[propName] = propValue;

    return styles;
  }, {});

  return stylesToCSS;
}

module.exports = convertToObject;
