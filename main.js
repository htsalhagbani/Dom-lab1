//part1
let Myname=document.getElementsByClassName("name")[0];
Myname.style.color='green';
Myname.style.backgroundColor='gray';

//part2
let paragraph = document.getElementById('major');
paragraph.className = 'major';
paragraph.style.fontWeight='bold';


//part3
let image = document.getElementsByTagName('img')[0]; 
image.src='img.jfif';

//part4
let element = document.querySelector('#list');
for (let i = 1; i <= 3; i++) {
    let li = document.createElement('li');
    li.textContent = "item " + i;
    li.style.color='rgb(177, 74, 160)';
    li.style.border = '1px solid #gray'; 
    li.style.padding = '10px'; 
    li.style.margin = '13px'; 
    element.appendChild(li);

}

//part5
let tableBox = document.getElementById('table');//continer

let table = document.createElement('table');
table.className = 'table'; 

let thead = document.createElement('thead');
let headRow = document.createElement('tr');
let header = ['H1', 'H2', 'H3'];
for (let i = 0; i < header.length; i++) {
    let th = document.createElement('th');
    th.textContent = header[i];
    headRow.appendChild(th);
}

thead.appendChild(headRow);
table.appendChild(thead);

let tbody = document.createElement('tbody');

for (let i = 1; i <= 2; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j <= 3; j++) {
        let td = document.createElement('td');
        td.textContent = `Row+cell :  ${i,j}`;
        row.appendChild(td);
    }
    tbody.appendChild(row);
}

table.appendChild(tbody);
tableBox.appendChild(table);
