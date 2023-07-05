import { getFilesTable } from './filesTable.js';
import {createTableWithRow} from './creatTableHtml.js';

async function readAttributesFile() {
  const response = await fetch('../js/data/attributes.txt');
  const text = await response.text();
  const attributeNames = text.trim().split('\n').map(line => line.trim().split(';')).flat();
  return attributeNames;
}

async function run() {
    const data = await getFilesTable(); // Chama a função e recebe o valor de 'data'
    console.log(data); // Imprime o valor de 'data' na outra função
    return data;
  }

// Chama a função para ler o arquivo e processar os atributos
  run().then(dataTable => {
    readAttributesFile().then(attributeNames => {
      // Itera sobre os objetos dentro do array
      dataTable.forEach(item => {
        const tableRowValues = attributeNames.map(attributeName => item[attributeName]);
        const tableRow = createTableWithRow(tableRowValues);
        const table = document.querySelector('div');
        table.appendChild(tableRow);
      });
    }).catch(error => {
      console.error('Erro ao ler o arquivo de atributos:', error);
    });
  }).catch(error => {
    console.error('Erro:', error);
  });
  
