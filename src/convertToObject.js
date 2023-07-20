'use strict';

function convertToObject(sourceString) {
  const getStyle = (styleString, sep) => styleString.split(`${sep}`);
  const styles = getStyle(sourceString, ';');

  const stylesCss = styles.reduce(
    (acc, style) => {
      const [property, value] = getStyle(style, ':');

      if (property && value) {
        acc[property.trim()] = value.trim();
      }

      return acc;
    },
    {}
  );

  return stylesCss;
}

module.exports = convertToObject;
