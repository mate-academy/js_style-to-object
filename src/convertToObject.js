'use strict';

function convertToObject(sourceString) {
  const styles = {};

  sourceString.split(';').map(item => {
    if (item.trim()) {
      const [prop, value] = item.split(':');

      styles[prop.trim()] = value.trim();
    }
  });

  return styles;
}
module.exports = convertToObject;
