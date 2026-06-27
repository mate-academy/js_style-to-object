'use strict';

module.exports = function convertToObject(stylesString) {
  if (!stylesString) {
    return {};
  }

  return stylesString.split(';').reduce((stylesObject, rule) => {
    const index = rule.indexOf(':');

    if (index === -1) {
      return stylesObject;
    }

    const key = rule.slice(0, index).trim();
    const value = rule.slice(index + 1).trim();

    if (!key) {
      return stylesObject;
    }

    return {
      ...stylesObject,
      [key]: value,
    };
  }, {});
};
