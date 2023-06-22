
    export function createTableRow(date, description, president, name) {

        const table = document.createElement('table');
        table.className = 'tbl-week'

        const tr = document.createElement('tr');
        tr.className = 'first-row';
        table.appendChild(tr);
      
        const td1 = document.createElement('td');
        const strong1 = document.createElement('strong');
        strong1.textContent = date;
        td1.appendChild(strong1);
        tr.appendChild(td1);
      
        const td2 = document.createElement('td');
        const strong2 = document.createElement('strong');
        strong2.textContent = description;
        td2.appendChild(strong2);
        tr.appendChild(td2);
      
        const td3 = document.createElement('td');
        td3.className = 'col3-right';
        td3.textContent = president;
        tr.appendChild(td3);
      
        const td4 = document.createElement('td');
        td4.textContent = name;
        tr.appendChild(td4);
      
        return table;
      }
      