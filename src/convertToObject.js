'use strict';

function convertToObject(sourceString) {
  const styles = {};
  const formattedStyles = sourceString
    .split(';')
    .filter(item => item.trim());

  formattedStyles.forEach(currentValue => {
    const [property, value] = currentValue.split(':');

    styles[property.trim()] = value.trim();
  });

  return styles;
}

module.exports = convertToObject;
