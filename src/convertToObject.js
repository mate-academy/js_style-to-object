function convertToObject(stylesString) {
  const rules = stylesString.split(';');
  
  const validRules = rules
    .map(rule => rule.trim())
    .filter(rule => rule.length);
  
  const keyValuePairs = validRules.map(rule => rule.split(':').map(item => item.trim()));
  
  const result = keyValuePairs.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
  
  return result;
}

export default convertToObject;

