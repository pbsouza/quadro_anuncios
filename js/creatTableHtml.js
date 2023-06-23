export function createRow1(selectedValues) {
  const tr = document.createElement('tr');
  tr.className = 'first-row';

  const td1 = document.createElement('td');
  const strong1 = document.createElement('strong');
  strong1.textContent = selectedValues[0];
  td1.appendChild(strong1);
  tr.appendChild(td1);

  const td2 = document.createElement('td');
  const strong2 = document.createElement('strong');
  strong2.textContent = selectedValues[1];
  td2.appendChild(strong2);
  tr.appendChild(td2);

  const td3 = document.createElement('td');
  td3.className = 'col3-right';
  td3.textContent = selectedValues[2];
  tr.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = selectedValues[3];
  tr.appendChild(td4);

  return tr;
}

export function createTableWithRow(selectedValues) {
  const table = document.createElement('table');
  table.className = 'tbl-week';
  const tr = createRow1(selectedValues);
  table.appendChild(tr);

  return table;
}