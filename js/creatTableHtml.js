function createRow1(selectedValues) {
  const tr1 = document.createElement('tr');
  tr1.className = 'first-row';

  const td1 = document.createElement('td');
  const strong1 = document.createElement('strong');
  strong1.textContent = selectedValues[0];
  td1.appendChild(strong1);
  tr1.appendChild(td1);

  const td2 = document.createElement('td');
  const strong2 = document.createElement('strong');
  strong2.textContent = selectedValues[1];
  td2.appendChild(strong2);
  tr1.appendChild(td2);

  const td3 = document.createElement('td');
  td3.className = 'col3-right';
  td3.textContent = selectedValues[2];
  tr1.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = selectedValues[3];
  tr1.appendChild(td4);

  return tr1;
}

function createRow2(selectedValues) {
  const tr2 = document.createElement('tr');
  tr2.className = 'start-end-color';

  const td1 = document.createElement('td');
  const strong1 = document.createElement('strong');
  strong1.textContent = selectedValues[0];
  td1.appendChild(strong1);
  tr2.appendChild(td1);

  const td2 = document.createElement('td');
  const strong2 = document.createElement('strong');
  strong2.textContent = selectedValues[1];
  td2.appendChild(strong2);
  tr2.appendChild(td2);

  const td3 = document.createElement('td');
  td3.className = 'col3-right';
  td3.textContent = selectedValues[2];
  tr2.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = selectedValues[3];
  tr2.appendChild(td4);

  return tr2;
}

export function createTableWithRow(selectedValues) {
  const table = document.createElement('table');
  table.className = 'tbl-week';
  const values1 = selectedValues.slice(0, 4);
  const values2 = selectedValues.slice(5, 9);
  const tr1 = createRow1(values1);
  const tr2 = createRow2(values2);
  table.appendChild(tr1);
  table.appendChild(tr2);

  return table;
}