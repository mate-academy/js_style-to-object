'use strict';

function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const objectStyles = {};

  const formattedStyles = styles.map(style => {
    let styleWithoutSpace = style.slice(1);

    if (styleWithoutSpace.includes('\n')) {
      styleWithoutSpace = styleWithoutSpace.slice(1);
    }

    return styleWithoutSpace
      .trim()
      .split(':');
  })
    .filter(style => style.length > 1);

  formattedStyles.forEach(style => {
    const [property, value] = style;

    objectStyles[property.trim()] = value.trim();
  });

  return objectStyles;
}

module.exports = convertToObject;
