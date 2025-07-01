function convertToObject(sourceString) {
  const result = {};

  let processedString = sourceString.trim();

  processedString = processedString.replace(/^\s*\n/gm, '');

  const rules = processedString.split(';');

  for (const rule of rules) {
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      continue;
    }

    const colonIndex = trimmedRule.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const prop = trimmedRule.slice(0, colonIndex).trim();
    let value = trimmedRule.slice(colonIndex + 1);

    value = value.replace(/^[\s\t]+/, '').replace(/[\s\t]+$/, '');

    if (prop && value) {
      result[prop] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
