function createRow1(tableRowValues) {
  const tr1 = document.createElement('tr');
  tr1.className = 'first-row';

  const td1 = document.createElement('td');
  const strong1 = document.createElement('strong');
  strong1.textContent = tableRowValues[0];
  td1.appendChild(strong1);
  tr1.appendChild(td1);

  const td2 = document.createElement('td');
  const strong2 = document.createElement('strong');
  strong2.textContent = tableRowValues[1];
  td2.appendChild(strong2);
  tr1.appendChild(td2);

  const td3 = document.createElement('td');
  td3.className = 'col3-right';
  td3.textContent = 'Presidente';
  tr1.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[2];
  tr1.appendChild(td4);
  return tr1;
}

function createRow2(tableRowValues) {
  const tr2 = document.createElement('tr');
  tr2.className = 'start-end-color';

  const td1 = document.createElement('td');
  tr2.appendChild(td1);

  const td2 = document.createElement('td');
  tr2.appendChild(td2);

  const td3 = document.createElement('td');
  td3.className = 'col3-right';
  td3.textContent = 'Conselheiro da sala B:';
  tr2.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[3];
  tr2.appendChild(td4);

  return tr2;
}

function createRow3(tableRowValues) {
  const tr3 = document.createElement('tr');
  tr3.className = 'start-end-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[4];
  tr3.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = 'Cântico inicial';
  tr3.appendChild(td2);

  const td3 = document.createElement('td');
  td3.className = 'col3-right';
  td3.textContent = 'Oração Inicial:';
  tr3.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[5];
  tr3.appendChild(td4);

  return tr3;
}

function createRow4(tableRowValues) {
  const tr4 = document.createElement('tr');
  tr4.className = 'start-end-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[6];
  tr4.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = 'Comentários iniciais';
  tr4.appendChild(td2);

  const td3 = document.createElement('td');
  tr4.appendChild(td3);

  const td4 = document.createElement('td');
  tr4.appendChild(td4);

  return tr4;
}

function createRow5(tableRowValues) {
  const tr5 = document.createElement('tr');
  tr5.className = 'session-treasures-title-color';

  const td1 = document.createElement('td');
  const img = document.createElement('img')
  img.src = '../images/Tesouros.png';
  img.width = '25';
  img.height = '25';
  td1.appendChild(img);
  tr5.appendChild(td1);

  const td2 = document.createElement('td');
  td2.className = 'session-title';
  td2.textContent = 'TESOUROS DA PALAVRA DE DEUS';
  tr5.appendChild(td2);

  const td3 = document.createElement('td');
  td3.className = 'session-title-roms';
  td3.textContent = 'Sala B';
  tr5.appendChild(td3);

  const td4 = document.createElement('td');
  td4.className = 'session-title-roms';
  td4.textContent = 'Salão Principal';
  tr5.appendChild(td4);

  return tr5;
}

function createRow6(tableRowValues) {
  const tr6 = document.createElement('tr');
  tr6.className = 'session-treasures-itens-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[7];
  tr6.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = 'Tesouros da palavra de Deus: (10 min)';
  tr6.appendChild(td2);

  const td3 = document.createElement('td');
  tr6.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[8];
  tr6.appendChild(td4);

  return tr6;
}

function createRow7(tableRowValues) {
  const tr7 = document.createElement('tr');
  tr7.className = 'session-treasures-itens-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[9];
  tr7.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = 'Joias espirituais: (10 min)';
  tr7.appendChild(td2);

  const td3 = document.createElement('td');
  tr7.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[10];
  tr7.appendChild(td4);

  return tr7;
}

function createRow8(tableRowValues) {
  const tr8 = document.createElement('tr');
  tr8.className = 'session-treasures-itens-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[11];
  tr8.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = 'Leitura da Bíblia: (4 min)';
  tr8.appendChild(td2);

  const td3 = document.createElement('td');
  td3.textContent = tableRowValues[12];
  tr8.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[13];
  tr8.appendChild(td4);

  return tr8;
}

function createRow9(tableRowValues) {
  const tr9 = document.createElement('tr');
  tr9.className = 'session-make-title-color';

  const td1 = document.createElement('td');
  const img = document.createElement('img')
  img.src = '../images/faca_seu_ melhor.png';
  img.width = '25';
  img.height = '25';
  td1.appendChild(img);
  tr9.appendChild(td1);

  const td2 = document.createElement('td');
  td2.className = 'session-title';
  td2.textContent = 'FAÇA SEU MELHOR NO MINISTÉRIO';
  tr9.appendChild(td2);

  const td3 = document.createElement('td');
  td3.className = 'session-title-roms';
  td3.textContent = 'Sala B';
  tr9.appendChild(td3);

  const td4 = document.createElement('td');
  td4.className = 'session-title-roms';
  td4.textContent = 'Salão Principal';
  tr9.appendChild(td4);

  return tr9
}

function createRow10(tableRowValues) {
  const tr10 = document.createElement('tr');
  tr10.className = 'session-make-itens-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[14];
  tr10.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = tableRowValues[15];
  tr10.appendChild(td2);

  const td3 = document.createElement('td');
  td3.textContent = tableRowValues[16];
  tr10.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[17];
  tr10.appendChild(td4);

  return tr10;
}

function createRow11(tableRowValues) {
  const tr11 = document.createElement('tr');
  tr11.className = 'session-make-itens-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[18];
  tr11.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = tableRowValues[19];
  tr11.appendChild(td2);

  const td3 = document.createElement('td');
  td3.textContent = tableRowValues[20];
  tr11.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[21];
  tr11.appendChild(td4);

  return tr11;
}

function createRow12(tableRowValues) {
  const tr12 = document.createElement('tr');
  tr12.className = 'session-make-itens-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[22];
  tr12.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = tableRowValues[23];
  tr12.appendChild(td2);

  const td3 = document.createElement('td');
  td3.textContent = tableRowValues[24];
  tr12.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[25];
  tr12.appendChild(td4);

  return tr12;
}

function createRow13(tableRowValues) {
  const tr13 = document.createElement('tr');
  tr13.className = 'session-life-title-color';

  const td1 = document.createElement('td');
  const img = document.createElement('img')
  img.src = '../images/nossa_vida.png';
  img.width = '25';
  img.height = '25';
  td1.appendChild(img);
  tr13.appendChild(td1);

  const td2 = document.createElement('td');
  td2.className = 'session-title';
  td2.textContent = 'VIDA CRISTÃ';
  tr13.appendChild(td2);

  const td3 = document.createElement('td');
  td3.className = 'session-title-roms';
  td3.textContent = 'Leitor';
  tr13.appendChild(td3);

  const td4 = document.createElement('td');
  td4.className = 'session-title-roms';
  td4.textContent = 'Salão Principal';
  tr13.appendChild(td4);

  return tr13
}

function createRow14(tableRowValues) {
  const tr14 = document.createElement('tr');
  tr14.className = 'session-life-itens-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[26];
  tr14.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = tableRowValues[27];
  tr14.appendChild(td2);

  const td3 = document.createElement('td');
  tr14.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[28];
  tr14.appendChild(td4);

  return tr14;
}

function createRow15(tableRowValues) {
  const tr15 = document.createElement('tr');
  tr15.className = 'session-life-itens-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[29];
  tr15.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = tableRowValues[30];
  tr15.appendChild(td2);

  const td3 = document.createElement('td');
  tr15.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[31];
  tr15.appendChild(td4);

  return tr15;
}


function createRow16(tableRowValues) {
  const tr16 = document.createElement('tr');
  tr16.className = 'session-life-itens-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[32];
  tr16.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = 'Estudo bíblico de congregação: (30 min)';
  tr16.appendChild(td2);

  const td3 = document.createElement('td');
  td3.textContent = tableRowValues[33];
  tr16.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[34];
  tr16.appendChild(td4);

  return tr16;
}

function createRow17(tableRowValues) {
  const tr17 = document.createElement('tr');
  tr17.className = 'start-end-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[35];
  tr17.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = 'Comentários finais';
  tr17.appendChild(td2);

  const td3 = document.createElement('td');
  tr17.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[36];
  tr17.appendChild(td4);

  return tr17;
}

function createRow18(tableRowValues) {
  const tr18 = document.createElement('tr');
  tr18.className = 'start-end-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[37];
  tr18.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = 'Cântico final e oração';
  tr18.appendChild(td2);

  const td3 = document.createElement('td');
  tr18.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = tableRowValues[38];
  tr18.appendChild(td4);

  return tr18;
}


function createRow19() {
  const tr19 = document.createElement('tr');
  tr19.className = 'divisor-row';
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  tr19.appendChild(td1, td2, td3, td4);

  return tr19
}


export function createTableWithRow(tableRowValues) {
  const table = document.createElement('table');
  table.className = 'tbl-week';
  const tr1 = createRow1(tableRowValues);
  const tr2 = createRow2(tableRowValues);
  const tr3 = createRow3(tableRowValues);
  const tr4 = createRow4(tableRowValues);
  const tr5 = createRow5(tableRowValues);
  const tr6 = createRow6(tableRowValues);
  const tr7 = createRow7(tableRowValues);
  const tr8 = createRow8(tableRowValues);
  const tr9 = createRow9(tableRowValues);
  const tr10 = createRow10(tableRowValues);
  const tr11 = createRow11(tableRowValues);
  const tr12 = createRow12(tableRowValues);
  const tr13 = createRow13(tableRowValues);
  const tr14 = createRow14(tableRowValues);
  const tr15 = createRow15(tableRowValues);
  const tr16 = createRow16(tableRowValues);
  const tr17 = createRow17(tableRowValues);
  const tr18 = createRow18(tableRowValues);
  const tr19 = createRow19(tableRowValues);
  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);
  table.appendChild(tr4);
  table.appendChild(tr5);
  table.appendChild(tr6);
  table.appendChild(tr7);
  table.appendChild(tr8);
  table.appendChild(tr9);
  table.appendChild(tr10);
  table.appendChild(tr11);
  table.appendChild(tr12);
  table.appendChild(tr13);
  table.appendChild(tr14);
  const indexWithContent = checkIndices(tableRowValues);
  if (indexWithContent !== -1){
    table.appendChild(tr15);
  }
  table.appendChild(tr16);
  table.appendChild(tr17);
  table.appendChild(tr18);
  table.appendChild(tr19);

  return table;
}



function checkIndices(array) {
  const indicesToCheck = [29, 30, 31];

  for (let i = 0; i < indicesToCheck.length; i++) {
    const index = indicesToCheck[i];
    if (array[index]) {
      return index;
    }
  }

  return -1; // Return -1 if none of the indices contain a value
}
