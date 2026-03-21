function convertToObject(sourceString) {
  // Divide a string usando ":" ou ";" como separadores
  const filtered = sourceString
    .split(/[:;]/)
    .map((s) => s.trim()) // Remove espaços extras de cada item
    .filter(Boolean); // Remove valores vazios do array

  // Usa reduce para construir o objeto de pares chave/valor
  const styleObject = filtered.reduce((acc, curr, index, arr) => {
    if (index % 2 === 0 && index + 1 < arr.length) {
      acc[curr] = arr[index + 1];
    }

    return acc;
  }, {});

  // Retorna o objeto final com os pares chave/valor
  return styleObject;
}

module.exports = convertToObject;
