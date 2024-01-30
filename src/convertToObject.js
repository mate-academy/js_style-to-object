'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString
    .split(';')
    .map(str => {
      return str
        .split('\n')
        .filter(item => item !== '')
        .map((item, i) => {
          return item
            .split(' ')
            .filter(el => el !== '')
            .map(el => {
              return el
                .split(':')
                .filter(elWithoutEmptyString => elWithoutEmptyString !== '');
            })
            .filter(el => el.length !== 0)
            .map(el => el[0]);
        })
        .filter(el => el.length !== 0);
    })
    .filter(el => el.length !== 0)
    .map(arr => arr[0]);

  return createObjectStyle(cssStyles);
}

function createObjectStyle(cssStyles = []) {
  const objStyles = {};

  cssStyles.forEach(style => {
    const [key, ...values] = style;

    objStyles[key] = values.join(' ');
  });

  return objStyles;
}

module.exports = convertToObject;
