'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';').filter(Boolean);

  return properties
    .map((prop) => prop.split(':', 2))
    .reduce(assignProperty, {});
}

function assignProperty(prev, current, indx, props) {
  const [prop, value] = current;

  if (prop && value) {
    prev[prop.trim()] = value.trim();
  }

  return prev;
}

module.exports = convertToObject;
