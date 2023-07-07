'use strict';

function convertToObject(sourceString) {
  const styleObj = {};

  const styles = sourceString.split(';');

  for (let i = 0; i < styles.length; i++) {
    const style = styles[i];

    const colonIndex = style.indexOf(':');

    if (colonIndex !== -1) {
      const property = style.slice(0, colonIndex).trim();
      const value = style.slice(colonIndex + 1).trim();

      styleObj[property] = value;
    }
  }

  return styleObj;
}

module.exports = convertToObject;
