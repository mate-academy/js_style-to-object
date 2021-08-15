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
  const styles = sourceString.split(';');

  const res = styles.map(el => el.split(':'));

  const clear = res.map(element =>
    element.map(part => part.trim())
  );

  // const stylesList = {};

  const filtered = clear.filter((item) => (
    item.length > 1
  ));

  // const result = filtered.forEach((item) => {
  //   // const [a, b] = item;

  //   // Object.assign(stylesList, a, b);
  //   item ? stylesList.item[0] = item[1]
  //     : stylesList.item[0] = 1;
  // });

  return Object.fromEntries(filtered);

  // console.log(result);
}

convertToObject(require('./stylesString'));

module.exports = convertToObject;
