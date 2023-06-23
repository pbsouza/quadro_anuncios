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
  td4.textContent = tableRowValues[11];
  tr3.appendChild(td4);

  return tr3;
}

function createRow4(tableRowValues) {
  const tr4 = document.createElement('tr');
  tr4.className = 'start-end-color';

  const td1 = document.createElement('td');
  td1.className = 'hour';
  td1.textContent = tableRowValues[4];
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
  img.src = 'https://docs.google.com/uc?id=1NsZgeVAE18uZun5bBU8dmpmLMZCOgin_';
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

export function createTableWithRow(tableRowValues) {
  const table = document.createElement('table');
  table.className = 'tbl-week';
  const tr1 = createRow1(tableRowValues);
  const tr2 = createRow2(tableRowValues);
  const tr3 = createRow3(tableRowValues);
  const tr4 = createRow4(tableRowValues);
  const tr5 = createRow5(tableRowValues);
  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);
  table.appendChild(tr4);
  table.appendChild(tr5);

  return table;
}