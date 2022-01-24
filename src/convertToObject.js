'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const properties = [...sourceString.matchAll(/[-a-z]+? *?:.+?;/g)];

  properties.forEach(function(property) {
    const propertyPair = property[0].replace(/  +|;/g, '').split(/: */g);

    styles[propertyPair[0]] = propertyPair[1];
  });

  return styles;
}

module.exports = convertToObject;
