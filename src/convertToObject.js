function convertToObject(sourceString) {
  // Divide a string usando ":" ou ";" como separadores
  const filtered = sourceString
    .split(/[:;]/)
    .map((s) => s.trim()) // Remove espaços extras de cada item
    .filter(Boolean); // Remove valores vazios do array

  // Cria um objeto vazio para armazenar os pares chave/valor
  const result = {};

  // Percorre o array pulando de 2 em 2 (chave e valor)
  for (let i = 0; i < filtered.length; i += 2) {
    // Garante que existe um valor correspondente para a chave
    if (i + 1 < filtered.length) {
      result[filtered[i]] = filtered[i + 1]; // Adiciona chave e valor ao objeto
    }
  }

  // Retorna o objeto final com os pares chave/valor
  return result;
}
module.exports = convertToObject;
