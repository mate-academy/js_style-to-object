'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let styles = sourceString.split(';');

  styles = styles.map(line => line.split(':'));

  styles = styles.filter(line => line.length === 2);

  const styleBlock = {};

  styles.forEach(line => {
    const key = line[0].replace(/\n/g, '').trim();

    styleBlock[key] = line[1].trim();
  });

  return styleBlock;
}

module.exports = convertToObject;
