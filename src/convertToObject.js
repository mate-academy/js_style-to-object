'use strict';

function convertToObject(styles) {
  const declarations = styles.trim().split(/;\s*/);

  const stylesObject = {};

  declarations.forEach((declaration) => {
    const [property, ...valueParts] = declaration.split(':');

    if (property) {
      const cleanProperty = property.trim();
      const cleanValue = valueParts.join(':').trim();

      if (cleanProperty && cleanValue) {
        stylesObject[cleanProperty] = cleanValue;
      }
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
