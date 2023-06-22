import { getFilesTable } from './filesTable.js';
import {createTableRow} from './creatTableHtml.js';

async function run() {
    const data = await getFilesTable(); // Chama a função e recebe o valor de 'data'
    console.log(data); // Imprime o valor de 'data' na outra função
    return data;
  }

run().then(dataTable => {
    // Itera sobre os objetos dentro do array
    dataTable.forEach(item => {
        let date = item.id;
        let description = item.created_at;
        let president = item.title;
        let name = item.hour;
        
        const tableRow = createTableRow(date, description, president, name);

        const table = document.querySelector('div');
        table.appendChild(tableRow);
    });
}).catch(error => {
    console.error('Erro:', error);
});
  








