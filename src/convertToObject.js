'use strict';

function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, rule) => {
    const cleanRule = rule.trim();

    if (cleanRule !== '') {
      const [key, ...valueParts] = cleanRule.split(':');

      acc[key.trim()] = valueParts.join(':').trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
