'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let styles = sourceString.split(';');

  styles = styles.map((item) => item.trim());

  const objStyles = {};

  for (const item of styles) {
    if (!item.includes(':')) {
      continue;
    }

    const [prop, ...rest] = item.split(':');

    const property = prop.trim();
    const value = rest.join(':').trim();

    if (property) {
      objStyles[property] = value;
    }
  }

  return objStyles;
}

module.exports = convertToObject;
