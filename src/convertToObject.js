'use strict';

function convertToObject(styleString) {
  const styles = {};

  styleString.split(';').forEach((rule) => {
    let [property, value] = rule.split(':');

    if (property && value) {
      property = property.trim();
      value = value.trim();
      styles[property] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
