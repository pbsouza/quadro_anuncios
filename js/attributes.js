// Função para ler o arquivo de atributos
export async function readAttributesFile() {
    const response = await fetch('./js/data/attributes.txt');
    const text = await response.text();
    const attributeNames = text.trim().split('\n').map(line => line.trim().split(';')).flat();
    return attributeNames;
  }