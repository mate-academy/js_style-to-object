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
const convertToObject = (sourceString) => {
  let words = sourceString.replace(/\n/g, '').replace(/[;:]/g, '_').split('_');
  const styles = {};

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].trimLeft();
  };

  words = words.filter(function(el) {
    return el !== '';
  });

  for (let i = 0; i < words.length - 1; i += 2) {
    styles[words[i]] = words[i + 1];
  };

  return styles;
};

module.exports = convertToObject;
