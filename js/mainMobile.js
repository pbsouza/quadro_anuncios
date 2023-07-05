import { getFilesTable } from './filesTable.js';

let indexDate;
// Função para ordenar o array com base no campo de data
async function ordenarPorData() {
  try {
    const data = await getFilesTable();
    console.log(data)
    data.sort(compararPorData);

    const dataAtual = new Date();
    
    if (dataAtual.getDay() > 4) {
      while (dataAtual.getDay() > 4 ) {
        dataAtual.setDate(dataAtual.getDate() - 1);
      }
    } else {
      while (dataAtual.getDay() < 4 ) {
        dataAtual.setDate(dataAtual.getDate() + 1);
      }
   
    }

    const dataAtualFormatada = dataAtual.toLocaleDateString();
    console.log(dataAtualFormatada);
    indexDate = dataAtualFormatada;
    

    const indice = data.findIndex(objeto => {
      const dataObjeto = new Date(objeto.day).toLocaleDateString();
      return dataObjeto === dataAtualFormatada;
    });

    let datasEspecificas = [];
    if (indice !== -1) {
      datasEspecificas = data.slice(indice - 6, indice + 6).filter(objeto => objeto !== undefined);
      console.log(datasEspecificas);
    }

    return datasEspecificas;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Função de comparação para ordenar com base no campo de data
function compararPorData(a, b) {
  const dataA = new Date(a.day);
  const dataB = new Date(b.day);
  return dataA - dataB;
}

// Chamar a função para ordenar o array por data
const datasEspecificas = await ordenarPorData();
console.log(datasEspecificas);

var indexData = datasEspecificas.findIndex(objeto => {
  const dataObjeto = new Date(objeto.day).toLocaleDateString();
  return dataObjeto === indexDate;
});

function insertData(){
  var dayElement = document.getElementById("day");
  dayElement.textContent = new Date(datasEspecificas[indexData].day).toLocaleDateString();
  var weekElement = document.getElementById("week");
  weekElement.textContent = datasEspecificas[indexData].week;
  var presidentElement = document.getElementById("president");
  presidentElement.textContent = datasEspecificas[indexData].president;
}

insertData()

document.getElementById('incrementIndex').addEventListener("click", incrementIndex)
document.getElementById('offIndex').addEventListener("click", offIndex)



function incrementIndex(){
  
  if (indexData + 1 < Object.keys(datasEspecificas).length) {
    indexData++;
    insertData();
  } else {
    alert("Não existe mais designações para as próximas semanas")
    console.log('Não existe mais semanas a visualizar');
  }
  
}

function offIndex(){
  
  if (indexData > 0) {
    indexData--;
    insertData();
  } else {
    alert("Não existe mais designações para as semanas anteriores")
    console.log('Não existe mais semanas a visualizar');
  }
  
}
