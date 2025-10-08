'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(rule => rule.trim())
    .filter(rule => rule.length > 0)
    .map(rule => {
      const colonIndex = rule.indexOf(':');
      if (colonIndex === -1) return null; // нет пары property:value
      const property = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();
      if (!property || !value) return null; // пропускаем пустые
      return [property, value];
    })
    .filter(Boolean)
    .reduce((stylesMap, [property, value]) => {
      stylesMap[property] = value;
      return stylesMap;
    }, {});
}

module.exports = convertToObject;
