import { getFilesTable } from './filesTable.js';

async function readAttributesFile() {
  const response = await fetch('./js/data/attributes.txt');
  const text = await response.text();
  const attributeNames = text.trim().split('\n').map(line => line.trim().split(';')).flat();
  return attributeNames;
}

async function indexAttributeNames(){
  let indexLength = (await readAttributesFile()).length;
  return indexLength
}

let indexDate;

// Função para ordenar o array com base no campo de data
async function ordenarPorData() {
  try {
    const data = await getFilesTable();
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


    return data;
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
const data = await ordenarPorData();
console.log(data);

var indexData = data.findIndex(objeto => {
  const dataObjeto = new Date(objeto.day).toLocaleDateString();
  return dataObjeto === indexDate;
});


let indexAttribute = await indexAttributeNames();
console.log(indexAttribute);

let attributeName = await readAttributesFile();



function insertData(){

  var dayElement = document.getElementById([attributeName[0]]);
  dayElement.textContent = new Date(data[indexData][attributeName[0]]).toLocaleDateString();
  var weekElement = document.getElementById(attributeName[1]);
  weekElement.textContent = data[indexData][attributeName[1]];
  var presidentElement = document.getElementById(attributeName[2]);
  presidentElement.textContent = data[indexData][attributeName[2]];
  var counselorClassBElement = document.getElementById(attributeName[3]);
  counselorClassBElement.textContent = data[indexData][attributeName[3]];
  var hourStartElement = document.getElementById(attributeName[4]);
  hourStartElement.textContent = data[indexData][attributeName[4]];
  var initialPrayerElement = document.getElementById(attributeName[5]);
  initialPrayerElement.textContent = data[indexData][attributeName[5]];
  var hourOpeningCommentsElement = document.getElementById(attributeName[6]);
  hourOpeningCommentsElement.textContent = data[indexData][attributeName[6]];
  var hourTreasuresElement = document.getElementById(attributeName[7]);
  hourTreasuresElement.textContent = data[indexData][attributeName[7]];
  var nameTreasuresElement = document.getElementById(attributeName[8]);
  nameTreasuresElement.textContent = data[indexData][attributeName[8]];
  var hourGemsElement = document.getElementById(attributeName[9]);
  hourGemsElement.textContent = data[indexData][attributeName[9]];
  var nameGemsElement = document.getElementById(attributeName[10]);
  nameGemsElement.textContent = data[indexData][attributeName[10]];
  var hourReadingElement = document.getElementById(attributeName[11]);
  hourReadingElement.textContent = data[indexData][attributeName[11]];
  var nameReadingHallBElement = document.getElementById(attributeName[12]);
  nameReadingHallBElement.textContent = data[indexData][attributeName[12]];
  var nameReadingMainHallElement = document.getElementById(attributeName[13]);
  nameReadingMainHallElement.textContent = data[indexData][attributeName[13]];
  var hourMakeDesignation1Element = document.getElementById(attributeName[14]);
  hourMakeDesignation1Element.textContent = data[indexData][attributeName[14]];
  var titleMakeDesignation1Element = document.getElementById(attributeName[15]);
  titleMakeDesignation1Element.textContent = data[indexData][attributeName[15]];
  
  var nameMakeDesignation1AElement = document.getElementById(attributeName[16]);
  var nameMakeDesignation1AElement1 = document.getElementById('nameMakeDesignation1A1');


  var indexName = data[indexData][attributeName[16]].indexOf("|");
  if (indexName !== -1){
    var names = splitNames(data[indexData][attributeName[16]]);
    nameMakeDesignation1AElement.textContent = names[0];
    nameMakeDesignation1AElement1.textContent = names[1]
  } else {
    nameMakeDesignation1AElement.textContent = data[indexData][attributeName[16]];
    nameMakeDesignation1AElement1.textContent = ("");
  }
  
  var nameMakeDesignation1BElement = document.getElementById(attributeName[17]);
  var nameMakeDesignation1BElement1 = document.getElementById('nameMakeDesignation1B1');
  var indexName = data[indexData][attributeName[17]].indexOf("|");
  if (indexName !== -1){
    var names = splitNames(data[indexData][attributeName[17]]);
    nameMakeDesignation1BElement.textContent = names[0];
    nameMakeDesignation1BElement1.textContent = names[1]
  } else {
    nameMakeDesignation1BElement.textContent = data[indexData][attributeName[17]];
    nameMakeDesignation1BElement1.textContent = (" ");
  }

  var hourMakeDesignation2Element = document.getElementById(attributeName[18]);
  hourMakeDesignation2Element.textContent = data[indexData][attributeName[18]];
  var titleMakeDesignation2Element = document.getElementById(attributeName[19]);
  titleMakeDesignation2Element.textContent = data[indexData][attributeName[19]];


  var nameMakeDesignation2AElement = document.getElementById(attributeName[20]);
  var nameMakeDesignation2AElement1 = document.getElementById('nameMakeDesignation2A1');
  var indexName = data[indexData][attributeName[20]].indexOf("|");
  if (indexName !== -1){
    var names = splitNames(data[indexData][attributeName[20]]);
    nameMakeDesignation2AElement.textContent = names[0];
    nameMakeDesignation2AElement1.textContent = names[1]
  } else {
    nameMakeDesignation2AElement.textContent = data[indexData][attributeName[20]];
    nameMakeDesignation2AElement1.textContent = (" ");
  }
  
  var nameMakeDesignation2BElement = document.getElementById(attributeName[21]);
  var nameMakeDesignation2BElement1 = document.getElementById('nameMakeDesignation2B1');
  var indexName = data[indexData][attributeName[21]].indexOf("|");
  if (indexName !== -1){
    var names = splitNames(data[indexData][attributeName[21]]);
    nameMakeDesignation2BElement.textContent = names[0];
    nameMakeDesignation2BElement1.textContent = names[1]
  } else {
    nameMakeDesignation2BElement.textContent = data[indexData][attributeName[21]];
    nameMakeDesignation2BElement1.textContent = (" ");
  }

  var hourMakeDesignation3Element = document.getElementById(attributeName[22]);
  hourMakeDesignation3Element.textContent = data[indexData][attributeName[22]];
  var titleMakeDesignation3Element = document.getElementById(attributeName[23]);
  titleMakeDesignation3Element.textContent = data[indexData][attributeName[23]];


  var nameMakeDesignation3AElement = document.getElementById(attributeName[24]);
  var nameMakeDesignation3AElement1 = document.getElementById('nameMakeDesignation3A1');
  var indexName = data[indexData][attributeName[24]].indexOf("|");
  if (indexName !== -1){
    var names = splitNames(data[indexData][attributeName[24]]);
    nameMakeDesignation3AElement.textContent = names[0];
    nameMakeDesignation3AElement1.textContent = names[1]
  } else {
    nameMakeDesignation3AElement.textContent = data[indexData][attributeName[24]];
    nameMakeDesignation3AElement1.textContent = (" ");
  }
  
  var nameMakeDesignation3BElement = document.getElementById(attributeName[25]);
  var nameMakeDesignation3BElement1 = document.getElementById('nameMakeDesignation3B1');
  var indexName = data[indexData][attributeName[25]].indexOf("|");
  if (indexName !== -1){
    var names = splitNames(data[indexData][attributeName[25]]);
    nameMakeDesignation3BElement.textContent = names[0];
    nameMakeDesignation3BElement1.textContent = names[1]
  } else {
    nameMakeDesignation3BElement.textContent = data[indexData][attributeName[25]];
    nameMakeDesignation3BElement1.textContent = (" ");
  }
  
  var hourLifeDesignation1Element = document.getElementById(attributeName[26]);
  hourLifeDesignation1Element.textContent = data[indexData][attributeName[26]];
  var titleLifeDesignation1Element = document.getElementById(attributeName[27]);
  titleLifeDesignation1Element.textContent = data[indexData][attributeName[27]];


  var nameLifeDesignation1Element = document.getElementById(attributeName[28]);
  nameLifeDesignation1Element.textContent = data[indexData][attributeName[28]];
 
  
  if (data[indexData][attributeName[29]] !== null){
    eraserRow();
    addRow();
    var hourLifeDesignation2Element = document.getElementById(attributeName[29]);
    hourLifeDesignation2Element.textContent = data[indexData][attributeName[29]];
    var titleLifeDesignation2Element = document.getElementById(attributeName[30]);
    titleLifeDesignation2Element.textContent = data[indexData][attributeName[30]];
    var nameLifeDesignation2Element = document.getElementById(attributeName[31]);
    nameLifeDesignation2Element.textContent = data[indexData][attributeName[31]];
  } else {
    eraserRow();
  }
  var hourCongStudyElement = document.getElementById(attributeName[32]);
  hourCongStudyElement.textContent = data[indexData][attributeName[32]];

  var readerCongStudyElement = document.getElementById(attributeName[33]);
  readerCongStudyElement.textContent = data[indexData][attributeName[33]];

  var leaderCongStudyElement = document.getElementById(attributeName[34]);
  leaderCongStudyElement.textContent = data[indexData][attributeName[34]];

  var hourConcludingCommentsElement = document.getElementById(attributeName[35]);
  hourConcludingCommentsElement.textContent = data[indexData][attributeName[35]];


  var hourFinalPrayerElement = document.getElementById(attributeName[37]);
  hourFinalPrayerElement.textContent = data[indexData][attributeName[37]];

  var nameFinalPrayerElement = document.getElementById(attributeName[38]);
  nameFinalPrayerElement.textContent = data[indexData][attributeName[38]];
}

insertData()

document.getElementById('incrementIndex').addEventListener("click", incrementIndex)
document.getElementById('offIndex').addEventListener("click", offIndex)


function splitNames(names){
  let name = names.split("|");
  return name;
}



function incrementIndex(){
  
  if (indexData + 1 < Object.keys(data).length) {
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


function addRow(){
  const divElement = document.getElementById('add-row-life');
  const divContainer = document.createElement('div');
  divContainer.id = 'add';
  divElement.appendChild(divContainer)
  const div1 = document.createElement('div');
  div1.className = 'style-life';
  const div2 = document.createElement('div');
  div2.className = 'hour';
  div1.appendChild(div2);
  const span1 = document.createElement('span');
  div2.appendChild(span1);
  const strong1 = document.createElement('strong');
  strong1.id = 'hourLifeDesignation2';
  span1.appendChild(strong1);
  divContainer.appendChild(div1);
  const div3 = document.createElement('div');
  div3.className = 'border-left';
  div1.appendChild(div3);
  const div4 = document.createElement('div');
  div4.className = 'assignment-life'
  div3.appendChild(div4);
  const span2 = document.createElement('span');
  span2.className = 'style-right';
  div4.appendChild(span2);
  const strong2 = document.createElement('strong');
  strong2.id = 'titleLifeDesignation2';
  span2.appendChild(strong2);
  const span3 = document.createElement('span');
  span3.id = 'nameLifeDesignation2';
  span3.className = 'style-right';
  div4.appendChild(span3);
}

function eraserRow() {
  const divElement = document.getElementById('add-row-life');
  if (divElement.innerHTML.trim() !== ''){
    const divRemove = document.getElementById('add')
    divRemove.remove();
  }
}